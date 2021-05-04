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

function GerarGraficoAPartirDeTxt(event){

    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){   
        var text = reader.result;
        var jsonObject = GerarJSON(text);       
        var grafico = GerarGrafico(jsonObject,'#custom-chart');
    };
    reader.readAsText(input.files[0]);
}

function GerarGrafico(jsonObject,id) { 

    c3.generate({
        bindto: id,
        data: {
            json: jsonObject,
            keys: {
                x : 'date',
                value: [ 'date','value' ]
            }  
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%m/%Y'
                }
            }
        }
    });

    return c3
}

function GerarJSON(text) {

    var cells = ConverterStringParaArrayEmFormaDeCelulas(text);
    var headings = ExtrairColunas(cells);
    var jsonObject = MapearColunasParaTransformarEmUmObjeto(cells, headings);
    return jsonObject;
}

function ExtrairColunas(cells) {
    return cells.shift();
}

function ConverterStringParaArrayEmFormaDeCelulas(text) {
    return text.split('\r\n').map(function (element) {
        return element.split(/\s+/);
    });
}

function MapearColunasParaTransformarEmUmObjeto(cells, headings) {
    return cells.map(function (element) {
        var jsonObject = {};
        for (var i = 0, l = element.length; i < l; i++) {
            jsonObject[headings[i]] = isNaN(Number(element[i])) ? element[i] : +element[i];
        }
        return jsonObject;
    });
}

