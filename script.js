window.addEventListener("load", startVises);

function startVises() {
    console.log("startVises");
    document.querySelector("#responsiveboks").classList.add("hide");
    document.querySelector("#ideboks").classList.add("hide");
    document.querySelector("#prototypeboks").classList.add("hide");
    document.querySelector("#pitchboks").classList.add("hide");
    document.querySelector("#assetlisteboks").classList.add("hide");
    document.querySelector("#spilboks").classList.add("hide");
    document.querySelector("#pilotboks").classList.add("hide");
    document.querySelector("#redesignboks").classList.add("hide");

    document.querySelector("#responsive").addEventListener("click", responsiveVises);
    document.querySelector("#ide").addEventListener("click", ideVises);
    document.querySelector("#prototype").addEventListener("click", prototypeVises);
    document.querySelector("#pitch").addEventListener("click", pitchVises);
    document.querySelector("#assetliste").addEventListener("click", assetlisteVises);
    document.querySelector("#spil").addEventListener("click", spilVises);
    document.querySelector("#pilot").addEventListener("click", pilotVises);
    document.querySelector("#redesign").addEventListener("click", redesignVises);

}

function responsiveVises() {
    console.log("responsiveVises");

    document.querySelector("#responsiveboks").classList.remove("hide");
    document.querySelector("#ideboks").classList.add("hide");
    document.querySelector("#prototypeboks").classList.add("hide");
    document.querySelector("#pitchboks").classList.add("hide");
    document.querySelector("#assetlisteboks").classList.add("hide");
    document.querySelector("#spilboks").classList.add("hide");
    document.querySelector("#pilotboks").classList.add("hide");
    document.querySelector("#redesignboks").classList.add("hide");
    document.querySelector("#responsivekryds").addEventListener("click", responsiveSkjules);
}

function responsiveSkjules() {
    console.log("responsiveSkjules");
    document.querySelector("#responsiveboks").classList.add("hide");
}

function ideVises() {
    console.log("ideVises");

    document.querySelector("#responsiveboks").classList.add("hide");
    document.querySelector("#ideboks").classList.remove("hide");
    document.querySelector("#prototypeboks").classList.add("hide");
    document.querySelector("#pitchboks").classList.add("hide");
    document.querySelector("#assetlisteboks").classList.add("hide");
    document.querySelector("#spilboks").classList.add("hide");
    document.querySelector("#pilotboks").classList.add("hide");
    document.querySelector("#redesignboks").classList.add("hide");
    document.querySelector("#idekryds").addEventListener("click", ideSkjules);
}

function ideSkjules() {
    console.log("ideSkjules");
    document.querySelector("#ideboks").classList.add("hide");
}

function prototypeVises() {
    console.log("prototypeVises");

    document.querySelector("#responsiveboks").classList.add("hide");
    document.querySelector("#ideboks").classList.add("hide");
    document.querySelector("#prototypeboks").classList.remove("hide");
    document.querySelector("#pitchboks").classList.add("hide");
    document.querySelector("#assetlisteboks").classList.add("hide");
    document.querySelector("#spilboks").classList.add("hide");
    document.querySelector("#pilotboks").classList.add("hide");
    document.querySelector("#redesignboks").classList.add("hide");
    document.querySelector("#prototypekryds").addEventListener("click", prototypeSkjules);
}

function prototypeSkjules() {
    console.log("prototypeSkjules");
    document.querySelector("#prototypeboks").classList.add("hide");
}

function pitchVises() {
    console.log("pitchVises");

    document.querySelector("#responsiveboks").classList.add("hide");
    document.querySelector("#ideboks").classList.add("hide");
    document.querySelector("#prototypeboks").classList.add("hide");
    document.querySelector("#pitchboks").classList.remove("hide");
    document.querySelector("#assetlisteboks").classList.add("hide");
    document.querySelector("#spilboks").classList.add("hide");
    document.querySelector("#pilotboks").classList.add("hide");
    document.querySelector("#redesignboks").classList.add("hide");
    document.querySelector("#pitchkryds").addEventListener("click", pitchSkjules);
}

function pitchSkjules() {
    console.log("pitchSkjules");
    document.querySelector("#pitchboks").classList.add("hide");
}

function assetlisteVises() {
    console.log("assetlisteVises");

    document.querySelector("#responsiveboks").classList.add("hide");
    document.querySelector("#ideboks").classList.add("hide");
    document.querySelector("#prototypeboks").classList.add("hide");
    document.querySelector("#pitchboks").classList.add("hide");
    document.querySelector("#assetlisteboks").classList.remove("hide");
    document.querySelector("#spilboks").classList.add("hide");
    document.querySelector("#pilotboks").classList.add("hide");
    document.querySelector("#redesignboks").classList.add("hide");
    document.querySelector("#assetlistekryds").addEventListener("click", assetlisteSkjules);
}

function assetlisteSkjules() {
    console.log("assetlisteSkjules");
    document.querySelector("#assetlisteboks").classList.add("hide");
}

function spilVises() {
    console.log("spilVises");

    document.querySelector("#responsiveboks").classList.add("hide");
    document.querySelector("#ideboks").classList.add("hide");
    document.querySelector("#prototypeboks").classList.add("hide");
    document.querySelector("#pitchboks").classList.add("hide");
    document.querySelector("#assetlisteboks").classList.add("hide");
    document.querySelector("#spilboks").classList.remove("hide");
    document.querySelector("#pilotboks").classList.add("hide");
    document.querySelector("#redesignboks").classList.add("hide");
    document.querySelector("#spilkryds").addEventListener("click", spilSkjules);
}

function spilSkjules() {
    console.log("spilSkjules");
    document.querySelector("#spilboks").classList.add("hide");
}

function pilotVises() {
    console.log("pilotVises");

    document.querySelector("#responsiveboks").classList.add("hide");
    document.querySelector("#ideboks").classList.add("hide");
    document.querySelector("#prototypeboks").classList.add("hide");
    document.querySelector("#pitchboks").classList.add("hide");
    document.querySelector("#assetlisteboks").classList.add("hide");
    document.querySelector("#spilboks").classList.add("hide");
    document.querySelector("#pilotboks").classList.remove("hide");
    document.querySelector("#redesignboks").classList.add("hide");
    document.querySelector("#pilotkryds").addEventListener("click", pilotSkjules);
}

function pilotSkjules() {
    console.log("pilotSkjules");
    document.querySelector("#pilotboks").classList.add("hide");
}

function redesignVises() {
    console.log("redesignVises");

    document.querySelector("#responsiveboks").classList.add("hide");
    document.querySelector("#ideboks").classList.add("hide");
    document.querySelector("#prototypeboks").classList.add("hide");
    document.querySelector("#pitchboks").classList.add("hide");
    document.querySelector("#assetlisteboks").classList.add("hide");
    document.querySelector("#spilboks").classList.add("hide");
    document.querySelector("#pilotboks").classList.add("hide");
    document.querySelector("#redesignboks").classList.remove("hide");
    document.querySelector("#redesignkryds").addEventListener("click", redesignSkjules);
}

function redesignSkjules() {
    console.log("redesignSkjules");
    document.querySelector("#redesignboks").classList.add("hide");
}
