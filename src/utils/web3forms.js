const WEB3FORMS_ACCESS_KEY = "bc3db678-d885-4c74-837a-6ddb3b246599";

/**
 * Submits a native <form> to Web3Forms. The access key is a public,
 * domain-scoped identifier by design (Web3Forms validates server-side
 * against the registered domain) — it is not a bearer secret and is safe
 * to ship in frontend code, unlike a service-role or API secret key.
 */
export async function submitWeb3Form(formElement, extraFields = {}) {
  const formData = new FormData(formElement);
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  Object.entries(extraFields).forEach(([key, value]) => {
    if (value) formData.append(key, value);
  });

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data;
}
