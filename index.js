// function CustomChart(file){
//     let rawFile = new XMLHttpRequest();
//     rawFile.open("GET",file, false);
//     rawFile.onreadystatechange = function()
//     {
//         if(rawFile.readyState === 4){
//             let alltext = rawFile.responseText;
//             alert(alltext);
//         }

//     }
//     rawFile.send(null);
// }

// function fetching(file){
//     var text = fetch(file)
//                     .then(response => response.text)
//                     .then(text => console.log(text));   
// }

function GerarChart(){
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ]
        }
    });
    
    setTimeout(function () {
        chart.load({
            columns: [
                ['data1', 230, 190, 300, 500, 300, 400]
            ]
        });
    }, 1000);
    
    setTimeout(function () {
        chart.load({
            columns: [
                ['data3', 130, 150, 200, 300, 200, 100]
            ]
        });
    }, 1500);
    
    setTimeout(function () {
        chart.unload({
            ids: 'data1'
        });
    }, 2000);
}

function OpenFile(event){

    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){   

        var text = reader.result;
        var node = document.getElementById('output');
        //node.innerText = text;

        //console.log(text);

        var cells = text.split('\n').map(function (el) {
            return el.split(/\s+/);
        });

        var headings = cells.shift();
        
        var obj = cells.map(function (el) {
            var obj = {};
            for (var i = 0, l = el.length; i < l; i++) {
              obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
            }
            return obj;
        });

        var json = JSON.stringify(obj);

        //console.log(json);

        var grafico = c3.generate({
            bindto: '#custom-chart',
            data: {
                x: 'x',
                columns: [
                    ['x', obj[0].date, obj[1].date, obj[2].date, obj[3].date, obj[4].date],
                    ['Valores', obj[0].value, obj[1].value, obj[2].value, obj[3].value, obj[4].value]
                ]
            },
            axis: {
                x: {
                    label: 'Data',
                    type: 'timeseries',
                    tick: {
                      format: '%Y-%m-%d'
                    }
                },
                y: {
                    label: 'Valor'
                }
            }
        });


    };
    reader.readAsText(input.files[0]);


}
