//Get Search form and page links
let search_form = document.getElementById("searchForm");
let pageLinks = document.getElementsByClassName("page-link");

//ensure seawrch form exists
if (search_form) {
  for (let i = 0; pageLinks.length > i; i++) {
    pageLinks[i].addEventListener("click", function (e) {
      e.preventDefault();

      //get data attribute
      let page = this.dataset.page;

      //add hidden search input to form
      search_form.innerHTML += `<input value=${page} name="page" hidden/>`;

      console.log("er");
      console.log(search_form);

      //submit
      search_form.submit();
    });
  }
}
