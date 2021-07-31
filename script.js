let navbar = document.querySelector(".navbar");
let button = navbar.querySelector(".new-action");
let add = button.querySelector(".new");
let grid = document.querySelector(".grid");
let table = document.querySelector("table");
let unaction = navbar.querySelector(".undone-action");
let undone = unaction.querySelector(".undone");
let dnaction = navbar.querySelector(".done-action");
let done = dnaction.querySelector(".done")

add.addEventListener("click", function () {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td contenteditable="true"></td>
   <td contenteditable="true"></td>
   <td contenteditable="true"></td>
   <td contenteditable="true"></td>
   <td contenteditable="true"></td>`
    table.append(tr);
})


const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...on clicking the heading of table it will sort 
table.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr));
})));

undone.addEventListener("click", function (e) {

    if (e.detail == 1) {
        done.classList.remove("slected");
        undone.classList.remove("slected");
        undone.classList.add("slected");
        // to show undone task
        undone_action();
    }
    else if(e.detail==2){
        done.classList.remove("slected");
        undone.classList.remove("slected");
        done.classList.add("slected");
        //to show done task
        done_action();
    }
})

done.addEventListener("click", function (e) {

    if (e.detail == 1) {
        done.classList.remove("slected");
        undone.classList.remove("slected");
        done.classList.add("slected")
        done_action()
    }
    else if(e.detail==2){
        //to show done task
        done.classList.remove("slected");
        undone.classList.remove("slected");
        undone.classList.add("slected")
        undone_action()
    }
})

function myFunction() {
    // Declare variables
    var input, filter, tr, td, i, txtValue;
    input = navbar.querySelector(".field");
    filter = input.value.toUpperCase();
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function undone_action(){
    var  filter, tr, td, i, txtValue;
    filter = "undone".toUpperCase();
        // table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
}
function done_action(){
    var  filter, tr, td, i, txtValue;
    filter = "done".toUpperCase();
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) == 0) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}