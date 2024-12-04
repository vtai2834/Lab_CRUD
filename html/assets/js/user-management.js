document
  .querySelector("#editUserModal")
  .addEventListener("shown.bs.modal", () => {
    document.querySelector("#firstNameEdit").focus();
  });

document
  .querySelector("#addUserModal")
  .addEventListener("shown.bs.modal", () => {
    document.querySelector("#firstName").focus();
  });

document.querySelectorAll(".delete-btn").forEach((btnConfirm) => {
  const id = btnConfirm.dataset.id;

  btnConfirm.addEventListener("click", (e) => {
    const options = {
      title: "Are you sure?",
      type: "danger",
      btnOkText: "Yes",
      btnCancelText: "No",
      onConfirm: () => {
        console.log("Confirm");
        deleteUser(id);
      },
      onCancel: () => {
        console.log("Cancel");
      },
    };
    const {
      el,
      content,
      options: confirmedOptions,
    } = bs5dialog.confirm("Do you really want to delete this user?", options);
  });
});

function showEditUserModal(btn) {
  const { id, first_name, last_name, user_name, mobile, is_admin } = btn.dataset;
  document.querySelector("#firstNameEdit").value = first_name;
  document.querySelector("#lastNameEdit").value = last_name;
  document.querySelector("#usernameEdit").value = user_name;
  document.querySelector("#mobileEdit").value = mobile;
  document.querySelector("#isAdminEdit").checked = is_admin ? true : false;
  document.querySelector('#idEdit').value = id;

}


async function editUser(e) {
  e.preventDefault(); // ngăn kh cho form thực hiện, mình tự thực hiện
  try {
    const formData = new FormData(document.querySelector('#editUserForm'));
    const data = Object.fromEntries(formData.entries());
    const res = await fetch('/users', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON .stringify(data),  
    });

    if (res.status == 200) {
      return location.reload();
    }

    const resText = await res.Text();
    throw new Error(resText);
  }catch (error) {
    document.querySelector('#errorMessageEdit').innerText = error.message;
    console.log(error);
  }
}

async function deleteUser(id) {
  try {
    const res = await fetch(`/users/${id}`, {
      method: "DELETE",
    });
    if (res.status == 200) {
      return location.reload();
    }

    const resText = await res.text();
    throw new Error(resText);
  } catch (error) {
    console.log(error);
    const toast = new bootstrap.Toast(document.querySelector('.toast'), {});
    document.querySelector('.toast-body').innerText = error.messagge;
    toast.show();
  }
}