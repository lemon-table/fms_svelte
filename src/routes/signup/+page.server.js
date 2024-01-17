export const actions = {
  default: async ({ request }) => {
    const signup = await request.formData();
    console.log(signup);
  },
};
