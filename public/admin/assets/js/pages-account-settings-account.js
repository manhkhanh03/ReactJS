/**
 * Account Settings - Account
 */

"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
    (function () {
        const deactivateAcc = document.querySelector(
            "#formAccountDeactivation"
        );

        // Update/reset user image of account page
        let accountUserImage = document.getElementById("uploadedAvatar");
        const fileInput = document.querySelector(".account-file-input"),
            resetFileInput = document.querySelector(".account-image-reset");

        if (accountUserImage) {
            const resetImage = accountUserImage.src;
            fileInput.onchange = (e) => {
                if (fileInput.files[0]) {
                    const fakePath = window.URL.createObjectURL(
                        fileInput.files[0]
                    );
                    //
                    if (typeof updateHTML === "function") {
                        updateHTML({
                            input: e.target,
                            path: fakePath,
                            parentImg: accountUserImage.parentNode.parentNode,
                        });
                    } else {
                        accountUserImage.src = fakePath;
                    }
                }
            };

            if (resetFileInput) {
                resetFileInput.onclick = () => {
                    fileInput.value = "";
                    accountUserImage.src = resetImage;
                };
            }
        }
    })();
});

function addForm(_ele, type) {
    console.log(_ele, type);
    const newDiv = document.createElement("div");
    let classW = type == "color" ? "w-25" : "w-50";
    newDiv.classList.add("col-md-6", "mb-2", "d-flex", "flex-wrap", classW);

    newDiv.innerHTML =
        type == "sizeQuantity"
            ? `
                <input type="text" name="newSize[]"
                    style="width: 16%;" class="form-control" placeholder="Size" >
                <input type="text" name="newQuantity[]"
                    style="width: 50%;" class="form-control" placeholder="Số lượng">
                <button type="button" onclick="_delete(this)" class="delete-div-size-quantity btn btn-danger ms-2">
                    <i class="bx bx-trash"></i>
                </button>
            `
            : `
                <input type="color" class="form-control" style="width: 56px; padding: 4px; height: 100%;" name="color[]">                        
                <button type="button" onclick="_delete(this)" class="delete-div-size-quantity btn btn-danger ms-2">
                    <i class="bx bx-trash"></i>
                </button>
            `;
    _ele.parentNode.parentNode.insertBefore(newDiv, _ele.parentNode);
}

function _delete(btnDelete) {
    btnDelete.parentNode.remove();
}
