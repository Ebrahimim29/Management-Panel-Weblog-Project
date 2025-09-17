// Global Variables
let currentEditingRow = -1;
let courses = [
    {title: "TypeScript" , teacher: "مهندس امیری"},
    {title: "Github" , teacher: "مهندس کامرانی"}
];

// Open Edit Modal
function openEditModal(title , teacher , rowIndex) {
    currentEditingRow = rowIndex;
    document.getElementById('courseTitle').value = title;
    document.getElementById('teacherName').value = teacher;
    document.getElementById('editModal').style.display = 'block';

    // Prevent Body Scroll When Modal is Open
    document.body.style.overflow = 'hidden';
   
}

// Close Edit Modal
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentEditingRow = -1;
}

// Close Modal When Clicking OutSide
window.onclick = function (event) {
    const modal = document.getElementById('editModal');
    if(event.target === modal){
        closeEditModal();
    }
}

// Handle Form Submission
document.getElementById('editForm').addEventListener('submit' , function(e) {
    e.preventDefault();

    const newTitle = document.getElementById('courseTitle').value.trim();
    const newTeacher = document.getElementById('teacherName').value.trim();

    if(newTitle === '' || newTeacher === ''){
        alert('لطفا تمام فیلدها را پر کنید');
        return;
    }
    
    // Update the Table
    updateTableRow(currentEditingRow , newTitle , newTeacher);

    // Update Courses Array
    courses[currentEditingRow] = {title: newTitle , teacher: newTeacher};

    // Show Success Message
    showNotification('تغییرات با موفقیت ذخیره شد' , 'success');

    // Close Modal
    closeEditModal()
});