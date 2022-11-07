n_input = document.querySelector("#n_input");
m_input = document.querySelector("#m_input");
e_input = document.querySelector("#e_input");
submitButton = document.querySelector("#submit");
name_header = document.querySelector("#name_header");
searchBox = document.querySelector("#searchBox");
table = document.querySelector("#sortable");
tr = document.getElementsByTagName("tr");
error1 = document.querySelector("#error1");
error1.style.display = "none";
error2 = document.querySelector("#error2");
error2.style.display = "none";
noresult = document.querySelector("#noResult");
noresult.style.display = "none";
const display = document.querySelector("#contact_table");



const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
displayContacts();

function filter()
{  
    var check = false
    for(i = 1; i< tr.length; i++)
    {
        
        td = tr[i].getElementsByTagName("td")[1];
        val = td.textContext || td.innerText;
        if (val.indexOf(searchBox.value) > -1) {
            tr[i].style.display = "";
            check = true;
            noresult.style.display = "none";
        } 
        else 
        {
            tr[i].style.display = "none";
        }
    }
    if (check == false)
    {
        noresult.style.display = "";
    }
}




submitButton.addEventListener("click", () =>{

    let n_value = n_input.value,
    m_value = m_input.value,
    e_value = e_input.value
    ;
    
    if(n_value && m_value && e_value)
    {
        error1.style.display = "none";
        if(m_value.length<10)
        {
            error2.style.display = "";
            return;
        }
        else
        {
            error2.style.display = "none";
        }

        
        let info = 
        {
            c_name : n_value,
            c_mobile : m_value,
            c_email : e_value
        }

        contacts.push(info);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    } 
    else
    {
        error1.style.display = "";
    }
    
    displayContacts();
    n_input.value = "";
    m_input.value = "";
    e_input.value = "";
});




function displayContacts()
{
    if(!contacts) return;
    document.querySelectorAll(".item").forEach(contact => contact.remove());
    contacts.forEach((contact, index) => {
        if(index%2>0){

        
        let cont = 
        
            `
            <tr class = "item">
             <td>${contact.c_name}</td>
             <td>${contact.c_mobile}</td>
             <td>${contact.c_email}</td>
           </tr>
            
            
            
            `
        //     <button id = "deleteButton">Delete Contact</button>
        //     </div>
        // `
        ;
        display.insertAdjacentHTML("beforeend", cont);

        //addDelete(index);
        }

        else{
            let cont = 
        
            `
            <tr class = "item" style="background-color: #f2f2f2;">
             <td>${contact.c_name}</td>
             <td>${contact.c_mobile}</td>
             <td>${contact.c_email}</td>
           </tr>
            
            
            
            `
        //     <button id = "deleteButton">Delete Contact</button>
        //     </div>
        // `
        ;
        display.insertAdjacentHTML("beforeend", cont);
        
        //addDelete(index);
        }


    });
    

}



function numbercheck(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
// function addDelete(index)
// {
//     deleteBtn = document.querySelector("#deleteButton");
//     deleteBtn.addEventListener("click", () => {
//         deleteContact(index);
//     });
//  }

// function deleteContact(ID)
// {
//     // contacts.splice(ID, 1);
//     // localStorage.setItem("contacts", JSON.stringify(contacts));
//     // displayContacts();
//     console.log("deleted " + ID);
// }