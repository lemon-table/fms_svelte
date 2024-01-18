// export const actions = {
//   default: async ({ request }) => {
//     const signup = await request.formData();
//     console.log(signup);
//   },
// };

//하는일: 특정 route에 대한 api endpoint(api서버)
//http method 처리
export const post = async ({ request }) => {
  try {
    // Ensure signUpData is properly defined, you might get it from the request
    const signUpData = await request.json();

    // Check if passwords match
    if (signUpData.password !== signUpData.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return {
        status: 400,
        body: { message: 'Password mismatch' },
      };
    }

    console.log("api start");

    // 중복되지 않은 경우 회원가입 진행
    const signUpResponse = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });

    console.log("api called");

    if (!signUpResponse.ok) {
      throw new Error("회원가입에 실패했습니다.");
    }

    const data = await signUpResponse.json();
    console.log("회원가입 성공:", data);

    return {
      status: 200,
      body: { message: 'Success' },
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      body: { message: 'Internal Server Error' },
    };
  }
};