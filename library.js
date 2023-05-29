
class Library {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    addBook(book) {
        console.log('Adding data to the table');
        let tableid = document.getElementById('tablebody');
        let ui = `<tr>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.type}</td>
    </tr>`;
        tableid.innerHTML += ui;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, message) {
        let show = document.getElementById("show");
        show.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <strong>${message}</strong> 
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;
    }
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', FormSubmit);

function FormSubmit(e) {
    e.preventDefault();
    console.log('You have submitted the form');
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let opt1 = document.getElementById('fiction');
    let opt2 = document.getElementById('programming');
    let opt3 = document.getElementById('love');
    let type;
    if (opt1.checked) {
        type = opt1.value;
    }
    else if (opt2.checked) {
        type = opt2.value;
    }
    else if (opt3.checked) {
        type = opt3.value;
    }
    let book = new Library(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.addBook(book);
        display.clear();
        display.show('success', 'Congratulations ! You have submitted the form ');
    }
    else {
        display.show('danger', 'Sorry ! Your Form is not submitted');
    }

}
