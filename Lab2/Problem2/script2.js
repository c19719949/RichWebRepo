
const api_url = 'https://jsonplaceholder.typicode.com/posts'

async function getdata()
{
    const response = await fetch(api_url);
    
    const data = await response.json();


    const data2 = data.filter(entry => entry.title.split(' ').length > 6);
    
    console.log(data2);
    let allBodies = ""


    data.forEach((entry)  =>{

        allBodies = allBodies.concat(entry.body.toString());
    
    
    });
    
        var words = allBodies.replace(/[.]/g, '').split(/\s/);
        var frequency = {};
        words.forEach(function(w) {
        if (!frequency[w]) {
            frequency[w] = 0;
        }
        frequency[w] += 1;
        })
    console.log(frequency)
 
}

getdata();

//testGitUpload


