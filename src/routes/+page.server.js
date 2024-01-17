export const actions = {
  default: async ({ request }) => {
    const login = await request.formData();
    const [email, password] = login;
    const resp = await (
      await fetch("http://localhost:3000/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email[1],
          password: password[1],
        }),
      })
    ).json();
    return resp;
  },
};
