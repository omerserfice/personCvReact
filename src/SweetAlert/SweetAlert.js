import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const confirm = (opts, callback, callbackRedirect) => {
  return MySwal.fire({
    title: opts.title,
    text: opts.text,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Evet",
    cancelButtonText: "Vazgeç",
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-outline-danger ml-1",
    },
    buttonsStyling: false,
  }).then(function (result) {
    if (result.value) {
      callback()
        .then((res) => {
          if (res.data.code) {
            if (res.data.code.statusCode === 1000) {
              MySwal.fire({
                icon: "success",
                title: "Başarılı!",
                text: res.data.message[0],
                confirmButtonText: "Tamam",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }).then(function (result) {
                if (result.value) {
                  callbackRedirect();
                }
              });
            } else {
              MySwal.fire({
                icon: "error",
                title: "Hata!",
                text: res.data.message,
                confirmButtonText: "Tamam",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }).then(() => callbackRedirect())
            }
          } else if (res.status === 201) {
            MySwal.fire({
              icon: "success",
              title: "Başarılı!",
              text: "İşlem onaylandı.",
              confirmButtonText: "Tamam",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(function (result) {
              if (result.value) {
                callbackRedirect();
              }
            });
          } else if (res) {
            if (res.data.code.statusCode === 1001) {
              MySwal.fire({
                icon: "error",
                title: "Hata!",
                text: res.data.message,
                confirmButtonText: "Tamam",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              })
                .then(function (result) {

                  if (result.value) {
                    callbackRedirect();
                  }
                });
            }
          }
        })
        .catch((err) => {
          if (err.statusCode === 401) {
            MySwal.fire({
              icon: "error",
              title: "error!",
              text: "Oturum Süreniz Dolmuştur.",
              confirmButtonText: "Tamam",
              customClass: {
                confirmButton: "btn btn-success",
              },
            }).then(function (result) {
              if (result.value) {
                localStorage.clear(); //logout a atıyoruz
                window.location.reload();
                callbackRedirect();
              }
            });
          } else {
            MySwal.fire({
              icon: "error",
              title: "error!",
              text: "İşlem sırasında hata oluştu.",
              confirmButtonText: "Tamam",
              customClass: {
                confirmButton: "btn btn-success",
              },
            })
              .then(function (result) {

                if (result.value) {
                  callbackRedirect();
                }
              });
          }
        });
    }
  });
};
