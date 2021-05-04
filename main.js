function getParagraph1()
    {
        console.log("anything")
        var inputs = [];
        for(var i = 1; i <=6; i++){
            var temp = document.getElementById("para1_input_box_" + i).value;
            inputs.push(temp);
        }
        var addPeriod = inputs.join(". ");
        document.getElementById("showParagraph1").innerHTML = addPeriod;
    }
    function getParagraph2()
    {
        var inputs = [];
        for(var i = 1; i <=6; i++){
            var temp = document.getElementById("para2_input_box_" + i).value;
            inputs.push(temp);
        }
        var addPeriod = inputs.join(". ");
        document.getElementById("showParagraph2").innerHTML = addPeriod;
    }