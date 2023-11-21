function openTab(tabName) {
    var i, content;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    if (tabName === 'companyname') {
        // If the company name is clicked, explicitly show the home content
        document.getElementById('home').style.display = "block";
    } else {
        // Otherwise, show the content corresponding to the clicked tab
        document.getElementById(tabName).style.display = "block";
    }
}

function showDropdown(){
    document.querySelector('.dropdown-content').classList.add('show');
}

function hideDropdown(){
    document.querySelector('.dropdown-content').classList.remove('show');
}

function openSubTab(subTabName){
    hideDropdown();
    openTab(subTabName);
}
openTab('home')