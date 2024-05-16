export const SET_MY_PROFILE = "SET_MY_PROFILE";

export const setMyProfile = (profile) => {
  return {
    type: SET_MY_PROFILE,
    payload: profile,
  };
};

export const getMyProfile = () => {
  const myKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmQ5MjE2N2U1MzAwMTVmYTY5NmYiLCJpYXQiOjE3MTU1ODQ0MDIsImV4cCI6MTcxNjc5NDAwMn0.Ok0_vafY6vDobp0aoeNBS9RlvytHX3veJb6PlPGP7nE";
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        dispatch(setMyProfile(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const SHOW_MODAL_IMAGE_UPLOAD = "SHOW_MODAL_IMAGE_UPLOAD";

export const setShowModalImageUpload = (payload) => {
  return {
    type: SHOW_MODAL_IMAGE_UPLOAD,
    payload,
  };
};

export const SHOW_MODAL_CREATE_POST = "SHOW_MODAL_CREATE_POST";

export const setShowModalCreatePost = (payload) => {
  return {
    type: SHOW_MODAL_CREATE_POST,
    payload,
  };
};
