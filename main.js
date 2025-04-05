const name = document.querySelector("#courseName");
const Category = document.querySelector("#courseCategory");
const coursePrice = document.querySelector("#coursePrice");
const courseDescription = document.querySelector("#courseDescription");
const courseCapacity = document.querySelector("#courseCapacity");
const addBtn = document.querySelector("#click");
const delBtn = document.querySelector("#deleteBtn");
let courses = [];






if (localStorage.getItem("courses") != null) {
    courses = JSON.parse(localStorage.getItem("courses"));
    displaycourses();
} 


addBtn.addEventListener("click",(e) => {
    e.preventDefault();
    const newCourse = {
        name: name.value,
        category: Category.value,
        price: coursePrice.value,
        description: courseDescription.value,
        capacity: courseCapacity.value
    }

    courses.push(newCourse); 
    localStorage.setItem("courses", JSON.stringify(courses));

    swal.fire({
        title: "All Done",
        text: "New course have bwwn added!",
        icon: "success"
      });

    displaycourses();
 
});


function displaycourses (){

    const result = courses.map((course, index ) => {
        return `<tr>
            <td>${index + 1 }</td>
            <td>${course.name}</td>
            <td>${course.category}</td>
            <td>${course.price}</td>
            <td>${course.description}</td>
            <td>${course.capacity}</td>
        </tr>`;
    }).join(' ');

    document.querySelector("#data").innerHTML = result;

}





delBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    courses = [];
    document.querySelector("#data").innerHTML = "";

    Swal.fire({
        title: "Cleared!",
        text: "All courses have been deleted.",
        icon: "success"
    });
});
