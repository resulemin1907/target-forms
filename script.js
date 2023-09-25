document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.querySelector(".save-btn");
    const form = document.getElementById("form");
    const fileNameInput = document.querySelector(".file-name input");
    const selectMenu = document.querySelector(".save-as select");

    function checkFormInputs() {
        const inputs = form.querySelectorAll(
            "input[type='text'], input[type='email'], input[type='number'], input[type='date'], input[type='url']"
        );
        let isFormValid = true;
        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                isFormValid = false;
            }
        });
        return isFormValid;
    }

    function updateSaveButtonState() {
        const isValid = checkFormInputs();
        saveButton.disabled = !isValid || fileNameInput.value.trim() === "";
        saveButton.style.cursor = isValid ? "pointer" : "not-allowed";
    }

    form.addEventListener("input", updateSaveButtonState);
    fileNameInput.addEventListener("input", updateSaveButtonState); // Dosya adı için de kontrol ekleyelim
    updateSaveButtonState(); // İlk yüklemede buton durumunu güncelleyelim.

    saveButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (!checkFormInputs() || fileNameInput.value.trim() === "") {
            return; // Gerekli girdiler doldurulmamışsa veya dosya adı girilmemişse dön.
        }

        const formData = new FormData(form);
        let fileContent = "";
        for (const [name, value] of formData.entries()) {
            fileContent += `${name}: ${value}\n`;
        }

        const blob = new Blob([fileContent], { type: selectMenu.value });
        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = fileNameInput.value;
        link.href = fileUrl;
        link.click();
        URL.revokeObjectURL(fileUrl);
    });

    selectMenu.addEventListener("change", () => {
        const selectedFormat =
            selectMenu.options[selectMenu.selectedIndex].text;
        saveButton.innerText = `SUBMIT as ${selectedFormat.split(" ")[0]} FILE`;
    });
});

let selectedItems = [];

const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".sBtn-text");

const optionsContainer = document.querySelector(".options-container");

selectBtn.addEventListener("click", function () {
    optionsContainer.classList.toggle("active");
});
selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
});

function updateTextareaContent() {
    const textarea = document.getElementById("textarea");
    textarea.value = selectedItems.join("\n");
}
const textarea = document.querySelector("textarea"),
    fileNameInput = document.querySelector(".file-name input"),
    selectMenu = document.querySelector(".save-as select"),
    saveBtn = document.querySelector(".save-btn");

options.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;

        if (!selectedItems.includes(selectedOption)) {
            selectedItems.push(selectedOption);
            updateTextareaContent();
        }

        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});
options.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;

        if (!selectedItems.includes(selectedOption)) {
            selectedItems.push(selectedOption);
            updateTextareaContent();
        }

        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});
options.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;

        if (!selectedItems.includes(selectedOption)) {
            selectedItems.push(selectedOption);
            updateTextareaContent();
        }

        sBtn_text.innerText = ""; // Seçilen öğeyi göstermeden önce içeriği temizle
        animateText(sBtn_text, selectedOption); // Animate function
        optionMenu.classList.remove("active");
    });
});

function animateText(element, text) {
    element.classList.remove("typewriter-effect");
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
            element.classList.add("typewriter-effect");
        }
    }, 50);
}

function addHexCodeInputs() {
    const dilimSayisi = document.getElementById("dilim_number").value;
    const hexCodeContainer = document.getElementById("hex_code_container");

    hexCodeContainer.innerHTML = "";

    for (let i = 1; i <= dilimSayisi; i++) {
        let label = document.createElement("label");
        label.textContent = "Hex Kodu " + i;

        const input = document.createElement("input");
        input.type = "text";
        input.name = "hex_code_" + i;

        hexCodeContainer.appendChild(label);
        hexCodeContainer.appendChild(input);
        hexCodeContainer.appendChild(document.createElement("display:flex"));
    }
}

function updateTextareaContent() {
    const textarea = document.getElementById("textarea");
    textarea.innerText = selectedItems.join("\n");
}
function showInput(option) {
    const selectedOption = document.getElementById("selectedOption");
    const inputContainer = document.getElementById("inputContainer");
    const inputNumber = document.getElementById("inputNumber");

    if (option) {
        selectedOption.textContent = `Capping Bilgisi : ${option}`;
        inputNumber.value = "";
        inputContainer.style.display = "block";
        inputNumber.focus();

        inputNumber.addEventListener("blur", function () {
            inputContainer.style.display = "block";
        });

        inputNumber.addEventListener(function (event) {
            if (event.key === "Enter") {
                inputContainer.style.display = "none";
                console.log(
                    `Capping bilgisi: ${option} - ${inputNumber.innerText}`
                );
            }
        });
    } else {
        inputContainer.style.display = "none";
        selectedOption.textContent = "Capping bilgisi:";
    }
}
function hesaplaFark() {
    const baslangicTarihi = new Date(
        document.getElementById("baslangic").value
    );
    const bitisTarihi = new Date(document.getElementById("bitis").value);

    const farkMilisaniye = bitisTarihi - baslangicTarihi;
    const farkGun = farkMilisaniye / (1000 * 60 * 60 * 24);

    const sonucElement = document.getElementById("farkSonuc");

    if (farkGun >= 0) {
        sonucElement.innerHTML = "Seçilen tarih aralığı " + farkGun + " gün.";
        sonucElement.style.color = "white";
        sonucElement.style.fontSize = "19px";
    } else {
        sonucElement.innerHTML =
            "<span style='font-size: 19px; color:  goldenrod ;'>Geçerli bir tarih aralığı seçin !!!</span>";
    }
}

function addHexCodeInputs() {
    const dilimSayisi = document.getElementById("dilim_number").value;
    const hexCodeContainer = document.getElementById("hex_code_container");

    hexCodeContainer.innerHTML = "";

    for (let i = 1; i <= dilimSayisi; i++) {
        let label = document.createElement("label");
        label.textContent = "Hex Kodu " + i;

        const input = document.createElement("input");
        input.type = "text";
        input.name = "hex_code_" + i;

        hexCodeContainer.appendChild(label);
        hexCodeContainer.appendChild(input);
        hexCodeContainer.appendChild(document.createElement("display:flex"));
    }
}
function addnotification() {
    const dilimSayisi = document.getElementById("noti_number").value;
    const notification_number = document.getElementById("notification_number");
    notification_number.innerHTML = "";

    for (let i = 1; i <= dilimSayisi; i++) {
        let label = document.createElement("label");
        label.textContent = "notification" + i;

        const input = document.createElement("input");
        input.type = "text";
        input.name = "notification" + i;

        notification_number.appendChild(label);
        notification_number.appendChild(input);
        notification_number.appendChild(document.createElement("display:flex"));
    }
}
function addAnket() {
    const anketSayısı = document.getElementById("anket_name").value;
    const anket_number = document.getElementById("anket_number");
    anket_number.innerHTML = "";

    for (let i = 1; i <= anketSayısı; i++) {
        let label = document.createElement("label");
        label.textContent = "Madde" + i;

        const input = document.createElement("input");
        input.type = "url";
        input.name = "Madde" + i;

        anket_number.appendChild(label);
        anket_number.appendChild(input);
        anket_number.appendChild(document.createElement("display:flex"));
    }
}
function addStory() {
    const dilimSayisi = document.getElementById("story_icon").value;
    const story_Number = document.getElementById("story_number");
    story_Number.innerHTML = "";

    for (let i = 1; i <= dilimSayisi; i++) {
        let label = document.createElement("label");
        label.textContent = "İcon" + i;

        const input = document.createElement("input");
        input.type = "url";
        input.name = "İcon" + i;

        story_Number.appendChild(label);
        story_Number.appendChild(input);
        story_Number.appendChild(document.createElement("display:flex"));
    }
}
function addcrosscategory() {
    const cross_number1 = document.getElementById("cross_number").value;
    const crossCateogry_number1 = document.getElementById(
        "crosscateogry_number"
    );
    crossCateogry_number1.innerHTML = "";

    for (let i = 1; i <= cross_number1; i++) {
        let label = document.createElement("label");
        label.textContent = "Product URL " + i;

        const productUrlInput = document.createElement("input");
        productUrlInput.type = "text";
        productUrlInput.name = "productURL" + i;

        const productMatchingInput = document.createElement("input");
        productMatchingInput.type = "text";
        productMatchingInput.name = "matchingProduct" + i;
        productMatchingInput.placeholder = "Matching Product ID or URL";

        crossCateogry_number1.appendChild(label);
        crossCateogry_number1.appendChild(productUrlInput);
        crossCateogry_number1.appendChild(productMatchingInput);
        crossCateogry_number1.appendChild(document.createElement("br"));
    }
}
function submitForm() {
    const formData = new FormData(document.getElementById("form"));

    for (let i = 1; i <= cross_number1; i++) {
        const productURL = formData.get("productURL" + i);
        const matchingProduct = formData.get("matchingProduct" + i);
        formData.append("productData", `${productURL}:${matchingProduct}`);
    }
}
options.forEach((option) => {
    option.addEventListener("click", function () {
        options.forEach((opt) => opt.classList.remove("active-option"));
        this.classList.add("active-option");
    });
});
function toggleDropdownbanner() {
    const dropdownContent = document.getElementById("bannerDropdown");
    dropdownContent.classList.toggle("active");
}
function toggleDropdowngame() {
    const dropdownContent = document.getElementById("gameDropdown");
    dropdownContent.classList.toggle("active");
}

document
    .querySelectorAll(".dropdown-content-game li.option-game")
    .forEach(function (item) {
        item.addEventListener("click", function () {
            document.querySelector("#selectBtn .sBtn-text").textContent =
                this.textContent;

            toggleDropdowngame();
        });
    });

document
    .querySelectorAll(".dropdown-content-banner li.option-banner")
    .forEach(function (item) {
        item.addEventListener("click", function () {
            document.querySelector("#selectBtn .sBtn-text").textContent =
                this.textContent;

            toggleDropdownbanner();
        });
    });
document.addEventListener("DOMContentLoaded", function () {
    const selectBtn = document.getElementById("selectBtn");
    const optionsContainer = document.querySelector(".options-container");

    selectBtn.addEventListener("click", function () {
        optionsContainer.classList.toggle("active");
    });
});
function closeWithCondition() {
    let checkbox = document.getElementById("acceptCheckbox");

    if (checkbox.checked) {
        closePopup();
    } else {
        alert("İleriye adım atmak için kutucuğu işaretleyin!");
    }
}

function closePopup() {
    let popup = document.getElementById("popupOverlay");
    popup.style.display = "none";
}

function carkıFelek() {
    document.getElementById("form").innerHTML = `<form  id="form" >
    <div class="form-steps-container">
    <div class="progress-bar">
            <div class="progress" id="progress"></div>
        </div>
        <div class="form-step" id="step1">

    <label>Dilim Sayısı</label>
          <input type="number" id="dilim_number"  name="dilim_sayısı" oninput="addHexCodeInputs()"  required/>
          <br />
          <div id="hex_code_container"> </div>
          </div>
          <div class="form-step" id="step2">

      <label>URL:</label>
      <input type="url" id="urlInput" name="url_name"  />
      <br /><br />
      <label>Yönlenecek url </label>
      <input type="text"  id="urlInput" name="hangi sayfada yönlendireleceği : " />
      <br /><br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
      </div>
      <div class="form-step" id="step3">
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc" name="kalan gün sayısı"></p>
      <br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
      </div>
      <div class="form-step" id="step4">

      <div class="dropdown">
      <div class="dropdown-item" name="capping">Capping Bilgisi Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')" name="capping">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')" name="capping" >Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')" name="capping">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')" name="capping">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')"name="capping" >Monthly</div>
      </div>
    </div>
    <br />
    <div class="selected-option" id="selectedOption" >Capping Bilgisi: </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="capping bilgisi" placeholder="kaç defa gösterilecek">
    </div>
    </div>

      <br />
     
      
  </div>

       `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}

function kazıKazan() {
    document.getElementById("form").innerHTML = ` <form  id="form" >
      
      <label class="kampanya"> Kampanya Kodu</label>
      <input type="text"  id="urlInput" name="kampanya_kodu" />
      <br />
      <br />
      <label >Desktop Görünümü</label>
      <input type="text" id="urlInput" placeholder="Önerilen 600*600px " name=" Desktop_Görünümü_Url">
      <br />
      <br />
      <label >Mobil Görünümü</label>
      <input type="text" id="urlInput" placeholder="  Önerilen 524*700px " name=" Mobil_Görünümü_Url">
      <br /> <br />  
  
      
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p>
      <br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
      
      <div class="dropdown">
      <div class="dropdown-item">Capping Bilgisi Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    <div class="selected-option" id="selectedOption" >Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
      <br />
      `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "3px solid red";
    } else {
        input.style.border = "";
    }
}
function mailForm() {
    document.getElementById("form").innerHTML = `<form id="form" >
     
      <label >Desktop Görünümü</label>
      <input type="text" id="urlInput" placeholder=" Önerilen 600*600px" name=" Desktop_Görünümü_Url">
      <br />
      <br />
      <label >Mobil Görünümü</label>
      <input type="text" id="urlInput" placeholder=" Önerilen 524*700px" name=" Mobil_Görünümü_Url">
      <br />  <br />
      <label> Aydinlatma Metni Linki </label>
      <input type="url" id="urlInput"  name=" Aydinlatma metni linki" />
      <br /><br />
      <label>İletişim İzin Linki </label>
      <input type="url" id="urlInput"  name="Iletisim izni linki" />
      <br /><br />  
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p>
      <br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
      <div class="dropdown">
      <div class="dropdown-item">Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    <div class="selected-option" id="selectedOption" >Capping Bilgisi:  </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
      <br />
     
      `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "3px solid red";
    } else {
        input.style.border = "";
    }
}
function headBanner() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      
      <label >Desktop Görünümü</label>
      <input type="text" id="urlInput" placeholder=" Önerilen 1920*50" name=" Desktop_Görünümü_Url">
      <br />
      <br /> 
      <label >Mobil Görünümü</label>
      <input type="text" id="urlInput" placeholder=" Önerilen 388*55 " name=" Mobil_Görünümü_Url">
      <br />  <br />
      <label> HTML Renk kodları</label>
      <input type="text" name="renk kodları" id="urlInput"/>
      <br />
      <br />
      <label>Metin Fontları </label>
      <input type="text" name="metin_fontları" id="urlInput"/>
      <br />
      <br />
      <label> Yonlendirilecek link</label>
      <input type="url" name="url_name" id="urlInput" />
      <br />
      <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p>
      <br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /><br /> 
  
      <div class="dropdown">
      <div class="dropdown-item">Capping Bilgisi Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    <div class="selected-option" id="selectedOption" >Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
  
  </form>`;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function Jackpot() {
    document.getElementById("form").innerHTML = `<form id="form" >
      <label>jackpot hediye kodu :</label>
      <input type="text" name="jackpot_hediye_kodu" id="urlInput"/>
      <br /><br/> 
      <label> Success 1 </label>
      <input type="url" name="jackpot_kalp_image1" id="urlInput" placeholder="kalp image url'i giriniz" />
      <br /><br/> 
      <label> Success 2 </label>
      <input type="url" name="jackpot_kalp_image2" id="urlInput" placeholder="kalp image url'i giriniz" />
      <br /><br/> 
      <label> Success 3 </label>
      <input type="url" name="jackpot_kalp_image3" id="urlInput" placeholder="kalp image url'i giriniz" />
      <br /><br/> 
      <label> Success 4 </label>
      <input type="url" name="jackpot_kalp_image4" id="urlInput" placeholder="kalp image url'i giriniz" />
      <br /><br/> 
    <label>Page to Apply:</label>
    <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
    name="ürün listesi"></textarea> <br /> <br />
     
    <label for="baslangic">Başlangıç Tarihi:</label>
    <input type="date" id="baslangic" name="baslangic"><br /><br />
    <label for="bitis">Bitiş Tarihi:</label>
    <input type="date" id="bitis" name="bitis"><br /><br />
    <p id="farkSonuc"></p><br />
    <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
    <br /> <br />
   
    <div class="dropdown">
    <div class="dropdown-item"> Capping Bilgisi Seç Seç</div>
    <div class="dropdown-content">
      <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
      <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
      <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
      <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
      <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
    </div>
  </div>
  <br />
  
  <div class="selected-option" id="selectedOption" name="Capping Bilgisi Seç">Capping Bilgisi : </div>
  <div class="selected-option" id="inputContainer">
    <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
  </div>
  <br />
 
   `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "2px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial"; // Reset border on blur
            });
        });
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function Box() {
    document.getElementById("form").innerHTML = `<form  id="form" >
    <label >Background İmage </label>
    <input type="text" id="urlInput" placeholder=" Önerilen 1000*600" name=" Desktop_Görünümü_Url">
    <br />
    <br /> 
    <label>Kutu 1 </label>
      <input type="url" name="kutu_image" id="urlInput" placeholder="kutu image giriniz" />
      <br /><br/> 
      <label> Hediye Kodu </label>
      <input type="text" name="kutu_hediye_kodu" id="urlInput"/>
      <br /><br/> 
      
      <label>Kutu 2 </label>
      <input type="url" name="kutu_image" id="urlInput" placeholder="kutu image giriniz" />
      <br /><br/> 
      <label> Hediye Kodu </label>
      <input type="text" name="kutu_hediye_kodu" id="urlInput"/>
      <br /><br/> 
       
      <label>Kutu 3 </label>
      <input type="url" name="kutu_image" id="urlInput" placeholder="kutu image giriniz" />
      <br /><br/> 
      <label> Hediye Kodu </label>
      <input type="text" name="kutu_hediye_kodu" id="urlInput"/>
      <br /><br/> 
      
      <label>Kutu 4 </label>
      <input type="url" name="kutu_image" id="urlInput" placeholder="kutu image giriniz" />
      <br /><br/> 
      <label> Hediye Kodu </label>
      <input type="text" name="kutu_hediye_kodu" id="urlInput"/>
      <br /><br/> 
       
    <label>Page to Apply:</label>
    <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
    name="ürün listesi"></textarea> <br /> <br />
     
    <label for="baslangic">Başlangıç Tarihi:</label>
    <input type="date" id="baslangic" name="baslangic"><br /><br />
    <label for="bitis">Bitiş Tarihi:</label>
    <input type="date" id="bitis" name="bitis"><br /><br />
    <p id="farkSonuc"></p><br />
    <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
    <br /> <br />
   
    <div class="dropdown">
    <div class="dropdown-item"> Capping Bilgisi Seç Seç</div>
    <div class="dropdown-content">
      <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
      <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
      <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
      <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
      <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
    </div>
  </div>
  <br />
  
  <div class="selected-option" id="selectedOption" name="Capping Bilgisi Seç">Capping Bilgisi : </div>
  <div class="selected-option" id="inputContainer">
    <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
  </div>
  <br />
   `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function Clover() {
    document.getElementById("form").innerHTML = `<form  id="form" >
    <br /> 
    <label >Yonca yapragı İmage </label>
    <input type="text" id="urlInput" placeholder=" yonca yaprağı image" name=" yonca yaprağı image">
    <br />
    <br /> 
    <label >Yonca Sapı İmage </label>
    <input type="text" id="urlInput" placeholder=" yonca sapı image" name=" yonca yaprağı image">
    <br />
    <br /> 
    <label>  Cupon Code 1 </label>
    <input type="text" name="clover_hediye_kodu" id="urlInput" placeholder=" kupon kodunu giriniz"/>
    <br /><br/> 
    <label>  Cupon Code 2 </label>
    <input type="text" name="clover_hediye_kodu" id="urlInput" placeholder=" kupon kodunu giriniz"/>
    <br /><br/>
    <label>  Cupon Code 3 </label>
    <input type="text" name="clover_hediye_kodu" id="urlInput" placeholder=" kupon kodunu giriniz"/>
    <br /><br/>
    <label>  Cupon Code 4 </label>
    <input type="text" name="clover_hediye_kodu" id="urlInput" placeholder=" kupon kodunu giriniz"/>
    <br /><br/>
    <label>Page to Apply:</label>
    <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
    name="ürün listesi"></textarea> <br /> <br />
     
    <label for="baslangic">Başlangıç Tarihi:</label>
    <input type="date" id="baslangic" name="baslangic"><br /><br />
    <label for="bitis">Bitiş Tarihi:</label>
    <input type="date" id="bitis" name="bitis"><br /><br />
    <p id="farkSonuc"></p><br />
    <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
    <br /> <br />
   
    <div class="dropdown">
    <div class="dropdown-item"> Capping Bilgisi  Seç</div>
    <div class="dropdown-content">
      <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
      <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
      <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
      <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
      <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
    </div>
  </div>
  <br />
  
  <div class="selected-option" id="selectedOption" name="Capping Bilgisi Seç">Capping Bilgisi : </div>
  <div class="selected-option" id="inputContainer">
    <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
  </div>
  <br />
   `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function Badge() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label>Görsel url :</label>
      <input type="text" name="badge_görsel_icon_url" id="urlInput" placeholder="Görsel İkon Boyutunda Olmalıdır "/>
      <br />
      <br />
      <label>Sayfanın Yönleneceği url :</label>
      <input type="text" name=" sayfanın yöneleceği url" id="urlInput"/>
      <br />
  
  
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi Seç">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function notificationIcon() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label> Kaç Tane Notification  </label>
          <input type="number" id="noti_number" name="kaç tane bidirge var" oninput="addnotification()" />
          <div id="notification_number"> </div>
      <br />
      <label> Çan ikonu İmage :</label>
      <input type="url" name=" çan ikonu url" id="urlInput" placeholder="png formatında olmalıdır"/>
      <br />
      <br />
      <label> Desktop Görünümü :</label>
      <input type="url" name="sayfa üzerindeki çan desktop görünümü " id="urlInput" placeholder="sayfanın üzerindeki konumu png formatında olmalıdır"/>
      <br />
      <br />
      <label> Mobil Görünümü :</label>
      <input type="url" name="sayfa üzerindeki çan mobil görünümü " id="urlInput" placeholder="sayfanın üzerindeki konumu png formatında olmalıdır "/>
      <br />
      <br />
  
        
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi Seç">Capping Bilgisi: </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi" placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function story() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label>Her story alanina kaç tane resimli icon gelsin </label>
          <input type="number" id="story_icon" name="kaç tane bidirge var" oninput="addStory()"  />
          <div id="story_number"> </div>
      <br />
      <label> Büyük Story Görseli :</label>
      <input type="url" name="büyük story görseli " id="urlInput" placeholder="boyutları instagram story tarzında olabilir"/>
      <br />
      <br />
      <label>Yonlendirme Linki:</label>
      <input type="url" name="story yönlendirme linki" id="urlInput" />
      <br />
      <br />
      <label> Storylerin altına yazılacak açıklama :</label>
      <textarea placeholder="açıklama kısa ve öz olmalıdır"
      name="Storylerin altına yazılacak açıklama "></textarea> <br /> <br />
  
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi Seç Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi Seç">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function anKet() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label> Ankette Sorulacak  Soru :</label>
      <input type="text" name="hangi aksiyon sonu çıkacağı" id="urlInput" />
      <br />
      <br/>
      <label> anket kaç maddeden oluşsun  </label>
          <input type="number" id="anket_name" name="anketde olan maddeler" oninput="addAnket()"  />
          <div id="anket_number"> </div>
      <br />
  
  
      <label> Hangi Aksiyon Sonu Çıkacağı :</label>
      <input type="text" name="Hangi Aksiyon Sonu Çıkacağı" id="urlInput" />
      <br />
      <br/>
      <label> Anket secenekleri ve tasarimsal detaylar :</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="anket ve tasarımsal detaylar "></textarea> <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi ">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function findToWin() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label> Satır Sayısı </label>
      <input type="number"  name="satır sayısı"  />
      <br/><br/>
      <label> Sütün Sayısı </label>
      <input type="number"  name="satır sayısı"  />
      <br/><br/>
      <label>Kutular Kaç Farlı İmageden Oluşsun  </label>
          <input type="number" id="image_img" name="kaç tane image gözükeceği " oninput="addimage()"  />
          <div id="image_number"> </div>
      <br />
      <label> Background Desktop Görünümü:</label>
      <input type="url" name="bul kazan arka plan desktop görünümü " id="urlInput" placeholder=" önerilen 1920*1080"/>
      <br />
      <br />
      <label> Background Mobile Görünümü:</label>
      <input type="url" name="bul kazan arka plan mobile görünümü " id="urlInput" placeholder=" önerilen 400*800"/>
      <br /><br />
  
      
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi ">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function pop_up() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label> Desktop Görünümü </label>
      <input type="url"  name="pop-up desktop görünümü"  id="urlInput" placeholder="ÖNERİLEN 600*600" />
      <br/><br/>
      <label> Mobile görünümü </label>
      <input type="url"  name="pop-up mobile görünümü"  id="urlInput" placeholder="ÖNERİLEN 300*500" />
      <br/><br/>
      <label>Yonlendirme Linki:</label>
      <input type="url" name="pop-up yönlendirme linki" id="urlInput" />
      <br /><br />
      <label>Sayfa Kuralı:</label>
      <textarea placeholder="sayfa kuralını maddeler halinde yazınız"
      name="sayfa kuralları"></textarea>
       <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi ">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function megaBanner() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label> Büyük Resimli Desktop Görünümü </label>
      <input type="url"  name="mega banner desktop büyük resim"  id="urlInput" placeholder=" ÖNERİLEN 1550*380" />
      <br/><br/>
      <label> Küçük Resimli Desktop Görünümü </label>
      <input type="url"  name="mega banner desktop küçük resim"  id="urlInput" placeholder="ÖNERİLEN  1550*110 " />
      <br/><br/>
      <label> Mobile Görünümü </label>
      <input type="url"  name=" mega banner mobile görünümü "  id="urlInput" placeholder=" ÖNERİLEN 380*350" />
      <br/><br/>
      <label> Cupon Code  </label>
      <input type="text" name="mega banner kupon kodu" id="urlInput" placeholder=" Görsel içerisinde kupon kodu varsa giriniz"/>
      <br /><br/>
      <label>Yonlendirme linki:</label>
      <input type="url" name="mega banner yönlendirme linki"  id="urlInput" />
      <br />
      <br />
      <label>Tasarımsal Faaliyetler </label>
      <textarea  placeholder="eklemek istediğiniz tasarımsal faaliyetler  "
      name="mega banner tasarımsal faaliyetler"></textarea> 
      <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi ">Capping Bilgisi: </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi" placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function bottomBanner() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label>  Desktop Görünümü </label>
      <input type="url"  name="bottom banner desktop görünümü"  id="urlInput" placeholder=" Önerilen 1920*50" />
      <br/><br/>
      <label>  Mobile Görünümü </label>
      <input type="url"  name="bottom banner mobile görünümü"  id="urlInput"placeholder=" Önerilen 388*55 " />
      <br/><br/>
      <br />
      <label>  Sayaç Süresi</label>
      <input type="text"  name=" bottom banner sayaç süresi"  id="urlInput" placeholder="sayılarla belirtiniz " />
      <br/><br/>
      <label> Cupon Code  </label>
      <input type="text" name="bottom banner kupon kodu" id="urlInput" placeholder=" Görsel içerisinde kupon kodu varsa giriniz"/>
      <br /><br/>
      <label>Tasarımsal Faaliyetler</label>
      <textarea placeholder="eklemek istediğiniz tasarımsal faaliyetler  "
      name=" bottom banner tasarımsal faaliyetler"></textarea>
       <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> 
      <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi Seç">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function kulakCık() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label>  Desktop Görünümü </label>
      <input type="url"  name="kulakçık desktop görünümü"  id="urlInput" placeholder=" Önerilen 200*250 " />
      <br/><br/>
      <label>  Mobile Görünümü </label>
      <input type="url"  name="kulakçık mobile görünümü"  id="urlInput"placeholder=" Önerilen 180*200 " />
      <br/><br/>
      <label>  Sayfadaki Konumu  </label>
      <input type="url"  name="kulakçık Sayfadaki Konumu url "  id="urlInput"placeholder=" png formatında olmalıdır " />
      <br/><br/>
      <label>Sayfanın Yönleneceği url :</label>
      <input type="text" name=" kulakçık sayfanın yöneleceği url" id="urlInput"/>
      <br />  <br />
      <label> Cupon Code  </label>
      <input type="text" name="kulakçık kupon kodu" id="urlInput" placeholder=" Görsel içerisinde kupon kodu varsa giriniz"/>
      <br /><br/>
      <label>  Sayaç Süresi</label>
      <input type="text"  name=" kulakçık sayaç süresi"  id="urlInput" placeholder="kodu kullanmak için olan sayaç süresi " />
      <br/><br/>
      <label>Tasarımsal Faaliyetler</label>
      <textarea placeholder="eklemek istediğiniz tasarımsal faaliyetler (button vb.) "
      name=" bottom banner tasarımsal faaliyetler"></textarea>
       <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> 
      <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi Seç Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi ">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function mostSearched() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label>Kaç Alandan Oluşsun</label>
      <input type="number" name ="kaç alandan oluşacak" id="urlInput"/>
      <label>  Sayfadaki Konumu  </label>
      <input type="url"  name="most searhed Sayfadaki Konumu url "  id="urlInput"placeholder=" png formatında olmalıdır " />
      <br/><br/>
      <label>Sayfanın Yönleneceği url :</label>
      <input type="text" name=" kulakçık sayfanın yöneleceği url" id="urlInput"/>
      <br/><br/>
      <label>Tasarımsal Faaliyetler</label>
      <textarea placeholder="eklemek istediğiniz tasarımsal faaliyetler (button vb.) "
      name=" most searched tasarımsal faaliyetler"></textarea>
       <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> 
      <br /> <br />
       
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function bannerPin() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label>  Desktop Background İmage </label>
      <input type="url"  name=" banner pin Desktop Background İmage"  id="urlInput" placeholder=" png formatında giriniz" />
      <br/><br/>
      <label>  Mobile Background İmage </label>
      <input type="url"  name=" banner pin Mobile Background İmage"  id="urlInput"placeholder=" png formatında giriniz " />
      <br/><br/>
      <label>  HTML ile Eklenecekse Background İmage ekleyin </label>
      <input type="url"  name=" html ile Background İmage "  id="urlInput"placeholder=" png formatında giriniz " />
      <br/><br/>
      <label>  Sayfadaki Konumu  </label>
      <input type="url"  name="banner pin Sayfadaki Konumu url "  id="urlInput"placeholder=" png formatında olmalıdır " />
      <br/><br/>
      <label>Sayfanın Yönleneceği url :</label>
      <input type="text" name=" kulakçık sayfanın yöneleceği url" id="urlInput"/>
      <br/><br/>
      <label>Tasarımsal Faaliyetler</label>
      <textarea placeholder="eklemek istediğiniz tasarımsal faaliyetler (button vb.) "
      name=" banner pin tasarımsal faaliyetler"></textarea>
       <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> 
      <br /> <br />
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi ">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function progressBar() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label> sepetin Sayfadaki Konumu  </label>
      <input type="url"  name="progress bar sepetin Sayfadaki Konumu url "  id="urlInput"placeholder=" png formatında olmalıdır " />
      <br/><br/>
      <label>Sayfanın Yönleneceği url :</label>
      <input type="url" name=" progress bar sayfanın yöneleceği url" id="urlInput"/>
      <br/><br/>
      <label>Progress barın kampanyasına göre nasıl çalışıyor</label>
      <textarea placeholder=""
      name="progress bar kampanyanın nasıl çalıştığı "></textarea>
       <br /> <br />
       <label>Hangi ürünlere gösterelececği ve o ürünlerin ID si</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="progress bar ürün ve ıd olarak gösterilmesi"></textarea> 
      <br /> <br />
       <label>  Tasarımsal Faaliyetler </label>
      <textarea placeholder="eklemek istediğiniz tasarımsal faaliyetler (button,bar vb.) "
      name=" progress bar tasarımsal faaliyetler"></textarea>
       <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> 
      <br /> <br />
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi  Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi ">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function crossCategory() {
    document.getElementById("form").innerHTML = `<form  id="form" >
      <label> Ürünlerin url Sayısını Giriniz</label>
          <input type="number" id="cross_number" name="kaç tane bidirge var" oninput="addcrosscategory()" />
          <div id="crosscateogry_number"> </div>
      <label>  Sayfadaki Konumu  </label>
      <input type="url"  name="crossCategory Sayfadaki Konumu url "  id="urlInput"placeholder=" png formatında olmalıdır " />
      <br/><br/>
      <label>Sayfanın Yönleneceği url :</label>
      <input type="text" name=" crossCategory sayfanın yöneleceği url" id="urlInput"/>
      <br/><br/>
      <label>Tasarımsal Faaliyetler</label>
      <textarea placeholder="eklemek istediğiniz tasarımsal faaliyetler (button,font vb.) "
      name=" crossCategory tasarımsal faaliyetler"></textarea>
       <br /> <br />
      <label>Page to Apply:</label>
      <textarea placeholder="Liste Numaralandırması alt alta yapılmak zorundadır"
      name="ürün listesi"></textarea> 
      <br /> <br />
      <label for="baslangic">Başlangıç Tarihi:</label>
      <input type="date" id="baslangic" name="baslangic"><br /><br />
      <label for="bitis">Bitiş Tarihi:</label>
      <input type="date" id="bitis" name="bitis"><br /><br />
      <p id="farkSonuc"></p><br />
      <button id="hesaplaButton" type="button" onclick="hesaplaFark()">Aralığı Hesapla</button>
      <br /> <br />
     
      <div class="dropdown">
      <div class="dropdown-item"> Capping Bilgisi Seç</div>
      <div class="dropdown-content">
        <div class="dropdown-item" onclick="showInput('Visitor')">Visitor</div>
        <div class="dropdown-item" onclick="showInput('Visit')">Visit</div>
        <div class="dropdown-item" onclick="showInput('Daily')">Daily</div>
        <div class="dropdown-item" onclick="showInput('Weekly')">Weekly</div>
        <div class="dropdown-item" onclick="showInput('Monthly')">Monthly</div>
      </div>
    </div>
    <br />
    
    <div class="selected-option" id="selectedOption" name="Capping Bilgisi ">Capping Bilgisi : </div>
    <div class="selected-option" id="inputContainer">
      <input type="number" id="inputNumber" name="Capping Bilgisi " placeholder="kaç defa gösterilecek">
    </div>
    <br />
     `;
    document
        .querySelectorAll(
            'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
        )
        .forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "3px solid red";
            });

            input.addEventListener("blur", function () {
                this.style.border = "initial";
            });
        });
    const inputFields = document.querySelectorAll(
        "input,date, textarea, select"
    );
    inputFields.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "3px solid red";
            } else {
                input.style.border = "";
            }
        });
    });
}

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "";
    }
}
function downloadImage() {
    document.querySelector("body").innerHTML = `
      
      <div class="container">
          <input type="file" id="file" accept="image/*" hidden multiple/>
          <div class="img-area" data-img="">
              <div class="drop-area">
                  <p>Drag & Drop or <span class="fake-btn">Browse</span></p>
              </div>
              <i class='bx bxs-cloud-upload icon'></i>
              <h3>Upload Image</h3>
              <p>Image 2 MB'den az olmalıdır</p>
          </div>
          <button class="select-image">Select Image</button>
          <button class="upload-image">Upload Image</button>
          <button class="delete-image">Delete Image</button>
      </div>
      
       `;
}
document
    .querySelectorAll(
        'input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="url"]'
    )
    .forEach(function (input) {
        input.addEventListener("focus", function () {
            this.style.border = "3px solid red";
        });

        input.addEventListener("blur", function () {
            this.style.border = "initial";
        });
    });
const selectImage = document.querySelector(".select-image");
const uploadImage = document.querySelector(".upload-image");
const inputFile = document.querySelector("#file");
const imgArea = document.querySelector(".img-area");
const uploadedImageKey = "uploadedImage";

selectImage.addEventListener("click", function () {
    inputFile.click();
});

uploadImage.addEventListener("click", function () {
    const imageDataURL = imgArea.querySelector("img").src;
    localStorage.setItem(uploadedImageKey, imageDataURL);
    alert("Image uploaded successfully!");
});

window.addEventListener("load", function () {
    const savedImageURL = localStorage.getItem(uploadedImageKey);
    if (savedImageURL) {
        const img = document.createElement("img");
        img.src = savedImageURL;
        imgArea.appendChild(img);
        imgArea.classList.add("active");
    }
});

inputFile.addEventListener("change", function () {
    const image = this.files[0];
    if (image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
            const allImg = imgArea.querySelectorAll("img");
            allImg.forEach((item) => item.remove());
            const imgUrl = reader.result;
            const img = document.createElement("img");
            img.src = imgUrl;
            imgArea.appendChild(img);
            imgArea.classList.add("active");
        };
        reader.readAsDataURL(image);
    } else {
        alert("Image size more than 2MB");
    }
});
const deleteImage = document.querySelector(".delete-image");

deleteImage.addEventListener("click", function () {
    const allImg = imgArea.querySelectorAll("img");
    allImg.forEach((item) => item.remove());
    localStorage.removeItem(uploadedImageKey);
    imgArea.classList.remove("active");
    alert("Image deleted successfully!");
});

const dropArea = document.querySelector(".drop-area");

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

["dragenter", "dragover"].forEach((eventName) => {
    dropArea.addEventListener(eventName, highlight, false);
});

["dragleave", "drop"].forEach((eventName) => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

dropArea.addEventListener("drop", handleDrop, false);

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropArea.classList.add("active");
}

function unhighlight() {
    dropArea.classList.remove("active");
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length > 0) {
        inputFile.files = files;
        handleImageUpload();
    }
}
function showPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

window.onload = showPopup;
function displayWrapper() {
    document.querySelector(".wrapper").style.display = "block";
}

function displaySaveButton() {
    document.querySelector(".save-btn").style.display = "block";
}

const options1 = document.querySelectorAll(".option");
options1.forEach((option) => {
    option.addEventListener("click", () => {
        displaySaveButton();
        displayWrapper();
    });
});
document;
window.onload = function () {
    const popupOverlay = document.getElementById("popupOverlay");
};
