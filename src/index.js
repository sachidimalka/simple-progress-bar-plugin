function progressBar(instance) {

    console.log("hhhh", instance);
    instance.classList.add("prog-wrap");

    instance.innerHTML =
        `<div class="prog-bar"></div>
       <div class="prog-percent">0%</div>`;
    instance.hbar = instance.querySelector(".prog-bar");
    instance.hpercent = instance.querySelector(".prog-percent");

    instance.set = (percent) => {
        instance.hbar.style.width = percent + "%";
        instance.hpercent.innerHTML = percent + "%";
    };
    return instance;
}

function progressValue(val) {
    console.log(val)
    let demo = progressBar(document.getElementById("progress-bar"));
    demo.set(val);
}

