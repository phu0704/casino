//Action start
document.addEventListener("DOMContentLoaded", () => {
  openSlideBar();
});
// Action in sidebar
function hidden(id1, id2) {
  let option = document.getElementById(id1);
  let img = document.getElementById(id2);

  if (option.className === "intro__active--option") {
    option.className += " hidden-option";
    img.setAttribute("style", "transform: rotate(180deg);");
  } else {
    option.className = "intro__active--option";
    img.setAttribute("style", "transform: rotate(0deg);");
  }
  img.style.transition = "all 0s linear";
}
function hiddenOptionCasinos() {
  hidden("option-casinos", "arrow-casinos");
}
function hiddenOptionBonuses() {
  hidden("option-bonuses", "arrow-bonuses");
}
function hiddenOptionGames() {
  hidden("option-games", "arrow-games");
}
// Action open Sidebar
function openSlideBar() {
  let sidebar = document.getElementById("sidebar");
  let coating = document.getElementById("sidebar-coating");
  let wrapperSidebar = document.getElementById("wrapper__sidebar");
  if (sidebar.className === "sidebar") {
    sidebar.className = "sidebar-show";
    coating.className += " hidden";
    wrapperSidebar.style.height = "0";
  } else {
    sidebar.className = "sidebar";
    coating.className = "coating";
    wrapperSidebar.style.height = "100%";
  }
}
//Action clink header__tab
function selectBtn(e) {
  let m = ["btn-recommended", "btn-brands", "btn-newly", "btn-all"];
  let x = document.getElementById(e);
  if (e === "btn-recommended") {
    document.getElementById("content-showmore").innerText =
      "We've thoroughly reviewed Wazamba Casino and gave it a good reputation rating. It's generally a good casino to play at, but there are some things worth noting. In our review, we've considered the casino's player complaints , estimated revenues, license, games genuineness, customer support quality, fairness of terms and conditions, withdrawal and win limits, and other factors. Because Wazamba Casino is related to other online casinos listed n limits, and other factors. Because Wazamba Casino is related to other online casinos listed below, its rating is also influenced by them. Read";
  } else if (e === "btn-brands") {
    document.getElementById("content-showmore").innerText =
      "In our review, we've considered the casino's player complaints , estimated revenues, license, games genuineness, customer support quality, fairness of terms and conditions, withdrawal and win limits, and other factors. Because Wazamba Casino is related to other online casinos listed n limits, and other factors.";
  } else if (e === "btn-newly") {
    document.getElementById("content-showmore").innerText =
      "Because Wazamba Casino is related to other online casinos listed below. We've thoroughly reviewed Wazamba Casino and gave it a good reputation rating. It's generally a good casino to play at, but there are some things worth noting.We've thoroughly reviewed Wazamba Casino and gave it a good reputation rating. It's generally a good casino to play at, but there are some things worth noting.We've thoroughly reviewed Wazamba Casino and gave it a good reputation rating. It's generally a good casino to play at, but there are some things worth noting. In our review, we've considered the casino's player complaints , estimated revenues, license, games genuineness, customer support quality, fairness of terms and conditions, withdrawal and win limits, and other factors. Because Wazamba Casino is related to other online casinos listed n limits, and other factors. Because Wazamba Casino is related to other online casinos listed below,";
  } else if (e === "btn-all") {
    document.getElementById("content-showmore").innerText =
      " Because Wazamba Casino is related to other online casinos listed n limits, and other factors. Because Wazamba Casino is related to other online casinos listed below, its rating is also influenced by them. Read";
  }
  if (document.getElementById("content-showmore").clientHeight < 96) {
    document.getElementById("show-more").style.display = "none";
  } else {
    document.getElementById("show-more").style.display = "flex";
  }
  x.className += " selected";

  m.map((i) => {
    if (i !== e) {
      getClassName0(i);
    }
  });
}
function getClassName0(id) {
  let x = document.getElementById(id);
  let str = x.className;
  let m = str.split(" ");
  x.className = m[0];
}
// Action click btn show-more
function showMore(id) {
  let x = document.getElementById(id);
  let coating = document.getElementById("coating");
  let contentShow = document.getElementById("content-showmore");
  let showContent=document.getElementById("show-more-content")
  if (x.className === "intro__show-more") {
    coating.style.display = "none";
    x.className += " appear";
    showContent.innerText="Show less"
    document.getElementById("intro-content").style.height = "auto";
    document.getElementById("img-showmore").style.transform = "rotate(180deg)";
    contentShow.className += " full-content";
  } else {
    showContent.innerText="Show more";
    x.className = "intro__show-more";
    coating.style.display = "block";
    contentShow.className = "content";
    document.getElementById("img-showmore").style.transform = "rotate(0deg)";
    document.getElementById("intro-content").style.height = "112px";
  }
}
//Section bookie
//Click button More Details
function appearMore(id) {
  let x = document.getElementById(id);
  let box = document.getElementById(id + "-box");
  let contentBtn=document.getElementById(id+"-content")
  if (x.className === "moreDetails") {
    x.className += " moreDetails-show";
    box.className += " box-hidden";
    contentBtn.innerText="More Details"
  } else {
    x.className = "moreDetails";
    box.className = "box__right--hidden";
    contentBtn.innerText="Less Details"
  }
}
///Action scroll
function checkScroll(id) {
  let element = document.getElementById(id);
  const top = element.getBoundingClientRect().top.toFixed(); //distancetoTop
  console.log(top);
  if (top > 350 && top < 800) {
    selectedScroll(id + "-r");
  }
}
function selectedScroll(id) {
  let x = document.getElementById(id);
  deleteSelectedScrooll("choose-title-r");
  deleteSelectedScrooll("criteria-title-r");
  deleteSelectedScrooll("sort-title-r");
  deleteSelectedScrooll("find-title-r");
  deleteSelectedScrooll("filters-title-r");
  x.className = "selected";
}
function deleteSelectedScrooll(id) {
  let x = document.getElementById(id);
  x.className = "";
}
function scrollInfor() {
  const element = document.getElementById("infor__box--left");
  let y = element.scrollTop.toFixed();
  console.log( "Vertically: " + y);
  if(y<650){
    selectedScroll( "choose-title-r");
  }else if(y<1300){
    selectedScroll( "criteria-title-r");
  }else if(y<1900){
    selectedScroll( "sort-title-r");
  }else if(y<2800){
    selectedScroll( "find-title-r");
  }else{
    selectedScroll( "filters-title-r");
  }

}
////////////////// Action hidden content
function hiddenContent(id) {
  let img = document.getElementById(id);
  let m = id.split("-");

  let content = document.getElementById(m[0] + "__content");
  if (content.className === "") {
    content.className += " hidden";
    img.setAttribute("style", "transform: rotate(180deg);");
  } else {
    content.className = "";
    img.setAttribute("style", "transform: rotate(0deg);");
  }
}
// Action hidden answer in section infor
function hiddenAnswer(id) {
  let tbody = document.getElementById(id + "-tbody");
  let img = document.getElementById(id);
  if (tbody.className === "") {
    // tbody.style.display="none"
    tbody.className = "answer-hidden";
    img.src = "./img/infor/plus.png";
  } else {
    tbody.className = "";
    // tbody.style.display="block"
    img.src = "./img/infor/minus.png";
  }
}
