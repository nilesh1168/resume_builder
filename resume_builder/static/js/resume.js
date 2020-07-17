$('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
})

$('#sidebarCollapse').on('click', function () {
    $('.sidebar').toggleClass('active');
});

function Print() {
    $('.sidebar').toggleClass('active');
    $('#sidebarCollapse').css('color','white');
    javascript:window.print();
};

$(document).on('keyup', 'input[type=text],textarea', function () {
    $(this).attr("size", $(this).val().length);
});
$('#education').on('change', 'input[type=date]', function () {
    $(this).attr("size", $(this).val().length);
});
$('#education').on('focusin', 'input[type=date]', function () {
    $(this).prop('type', 'date');
});
$('#education').on('focusout', 'input[type=date]', function () {
    $(this).prop('type', 'text');
    if ($(this).is('.toduration')) {
        var today = new Date().toISOString().slice(0, 10);
        if ($(this).val() == today) {
            $(this).val('Ongoing');
        }

    }
});


function delSection(node) {
    $(node).remove();
}

function delsubSection(node) {
    console.log(node.parentNode.parentNode);
    $(node.parentNode.parentNode).remove();
}

// function adjust() {

//     var input = document.querySelectorAll('input[type=text]');                         //To set initial
//     for (i = 0; i < input.length; i++) {                                              //width of input to
//         input[i].setAttribute('size', input[i].getAttribute('placeholder').length);  //placeholder text
//     }                                                                               //

// }

function addsubSkill(node) {
    // console.log($(node.parentNode.parentNode).children('.add-skill'));
    $($(node.parentNode.parentNode).children('.add-skill')).append("<input class='new-subskill' type='text' placeholder='Python'></input>");
}

function addAchievement() {
    var newSection = "<div id='achievement' class='mb-5'><span class='section'>Achievements</span><hr class='resume-body-hr'><ul style='padding: 5px;'><li style='display:table;'><i class='fas fa-medal pr-2' style='color:green; font-size: 40px; vertical-align:middle; display:table-cell;'></i><textarea class='achievement nodel ml-2' style='width:510px;display:table-cell;' rows='1' placeholder='tfyucyt'></textarea></li></ul><hr></div>";
    $('#left-col').append(newSection);
}

function addAwards() {

    var newSection = "<div id='awards' class='mb-5'><span class='section'>Awards</span><hr class='resume-body-hr'><ul style='padding: 5px;'><li style='display:table;' class='mb-4'><i class='fas fa-award pr-2' style='color:green; font-size: 40px; vertical-align:middle; display:table-cell;'></i><textarea class='award nodel ml-2' style='width:330px;display:table-cell;' rows='1' placeholder='tfyucyt'></textarea></li></ul><hr></div>";
    $('#right-col').append(newSection);
}

function addCocurricular() {
    var newSection = "<div id='co-curricular' class='mb-5'><span class='section'>Co-Curricular Activities</span><hr class='resume-body-hr'><ul style='padding: 5px;'><li style='display:table;' class='mb-4'><i class='fas fa-arrow-right' style='vertical-align:middle; display:table-cell;'></i><textarea class='co-act nodel ml-2' style='width:330px;display:table-cell;' rows='1' placeholder='tfyucyt'></textarea></li></ul><hr></div>";
    $('#right-col').append(newSection);
}

function addExperience() {
    var newSection = "<div id='exp' class='mb-5'><span class='section'>Experience</span><hr class='resume-body-hr'><div class='new-exp'><span id='degree' style='display: table;' ><textarea style='width: 510px; display: table-cell; vertical-align: middle;' rows='1' class='degree nodel' type='text'placeholder='Persistent Systems'></textarea></span><input class='university' type='text'placeholder='Software Engineer'style='width: 100%;'></input><i class='far fa-calendar-minus pr-2'></i><input class='fromduration ml-3' type='date' placeholder='01/01/2000'></input>-<input class='toduration ml-3' type='date' placeholder='01/01/2000'></input><ul style='padding: 5px;'><li class='mt-3' style='display: table;'><i class='fas fa-arrow-right' style='display: table-cell; vertical-align: middle;'></i><textarea class='nodel ml-2' style='width: 510px; display: table-cell; vertical-align: middle;' rows='1'>...</textarea></li></ul><hr></div></div>"
    $('#left-col').append(newSection);
}

function addInterests() {
    var newSection = "<div id='interests' class='mb-5'><span class='section'>Interests</span><hr class='resume-body-hr'><ul style='padding: 5px;'><li style='display:table;' class='mb-4'><i class='fas fa-arrow-right 'style='display: table-cell; vertical-align: middle;'></i><textarea class='interest nodel ml-2' style='width:330px;display:table-cell;' rows='1' placeholder='tfyucyt'></textarea></li></ul><hr></div>";
    $("#right-col").append(newSection);
}

function addProjects() {
    var newSection = "<div id='project' class='mb-5'><span class='section'>Projects</span><hr class='resume-body-hr'><div class='new-proj'><span id='project_name' style='display: table;' ><textarea style='width: 510px; display: table-cell; vertical-align: middle;' rows='1' class='nodel degree' type='text 'placeholder='Daily Task Lister'></textarea></span><i class='far fa-calendar-minus pr-2'></i><input class='fromduration ml-3' type='date' placeholder='01/01/2000'></input>-<input class='toduration ml-3' type='date' placeholder='01/01/2000'></input><ul style='padding: 5px;'><li class='mt-3' style='display: table;'><i class='fas fa-arrow-right' style='display: table-cell; vertical-align: middle;'></i><textarea class='nodel ml-2' style='width: 510px; display: table-cell; vertical-align: middle;' rows='1'>...</textarea></li></ul><hr></div></div>"
    $('#left-col').append(newSection);
}

function addnewEdu(node) {
    var newEdu = "<div class='new-edu'><span id='degree'><input class='degree' type='text'placeholder='B.E Computer Engineering'></input></span><input class='university' type='text'placeholder='Savitribai Phule Pune University' style='width: 100%;'></input><i class='far fa-calendar-minus pr-2'></i><input class='fromduration ml-3' type='date'>-<input class='toduration ml-3' type='date' ><ul style='padding: 5px;'><li class='mt-3' style='display: table;'><i class='fas fa-arrow-right pr-2'style='display: table-cell; vertical-align: middle;'></i><textarea class='ml-2'style='width: 510px; display: table-cell; vertical-align: middle;'rows='1'>...</textarea></li></ul><hr class='my-4'></div>";
    $(node).append(newEdu);
}

function addnewSkill(node) {
    var newsubSkill = "<div class='new-skill'><span id='skills'><input class='skills' type='text'placeholder='Coding'></input></span><div class='add-skill'><input class='new-subskill' data-toggle='tooltip' title='Press Double backspace on empty to delete!' type='text' placeholder='Python'></input><input class='new-subskill' type='text' placeholder='CSS3'></input><input class='new-subskill' type='text' placeholder='CSS3'></input></div><hr class='my-4'></div>";
    $(node).append(newsubSkill);
}

function addnewExp(node) {
    var newExp = "<div class='new-exp'><span id='degree'><input class='degree' type='text'placeholder='Persistent Systems'></input></span><input class='university' type='text'placeholder='Software Engineer'style='width: 100%;'></input><i class='far fa-calendar-minus pr-2'></i> From <input class='duration ml-3' type='date' placeholder='01/01/2000'></input> to<input class='duration ml-3' type='date' placeholder='01/01/2000'></input><ul style='padding: 5px;'><li class='mt-3' style='display: table;'><i class='fas fa-arrow-right' style='display: table-cell; vertical-align: middle;'></i><textarea class='ml-2' style='width: 510px; display: table-cell; vertical-align: middle;' rows='1'>...</textarea></li></ul><hr class='my-4'></div></div>";
    $(node).append(newExp);
}

function addLink(node) {
    console.log("addlink " + node.parentNode);
    $("<span><i onclick='addLink()' style='font-size:20px; cursor: pointer;' class='fas fa-link mr-2'></i><input type='text' id='link' placeholder = 'github.com'></span>").insertAfter(node.parentNode);
}

function addnewProject(node) {
    var newProject = "<div class='new-proj'><span id='project_name'><input class='degree' type='text 'placeholder='Daily Task Lister'></input></span><i class='far fa-calendar-minus pr-2'></i> From <input class='duration ml-3' type='date' placeholder='01/01/2000'></input> to<input class='duration ml-3' type='date' placeholder='01/01/2000'></input><ul style='padding: 5px;'><li class='mt-3' style='display: table;'><i class='fas fa-arrow-right' style='display: table-cell; vertical-align: middle;'></i><textarea class='ml-2' style='width: 510px; display: table-cell; vertical-align: middle;' rows='1'>...</textarea></li></ul><hr class='my-4'></div></div>";
    $(node).append(newProject);
}

$('.resume-body').on('keydown', '.new-subskill, textarea', function (evt) {
    if(!$(this).is('.nodel')){
        if ($(this).is('textarea')) {
            var size = $(this).val().length
            if (size == 0 && evt.which === 8) {
                $(this.parentNode).remove();
            }
        }
        else {
            var size = this.getAttribute('size')
            if (size == 0 && evt.which === 8)
                $(this).remove();
        }
    }
});

$(".resume-body").on('mouseenter', ".section", function () {
    switch (this.parentNode.getAttribute('id')) {
        case 'education':
            $(this).append("<i onclick='addnewEdu(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-plus pl-3'></i>");
            break;
        case 'skill':
            $(this).append("<i onclick='addnewSkill(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-plus pl-3'></i>");
            break;
        case 'exp':
            $(this).append("<i onclick='addnewExp(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-plus pl-3'></i>");
            $(this).append("<i onclick='delSection(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-trash-alt pl-3'></i>");
            break;
        case 'project':
            $(this).append("<i onclick='addnewProject(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-plus pl-3'></i>");
            $(this).append("<i onclick='delSection(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-trash-alt pl-3'></i>");
            break;
        case 'achievement':
            $(this).append("<i onclick='delSection(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-trash-alt pl-3'></i>");
            break;
        case 'awards':
            $(this).append("<i onclick='delSection(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-trash-alt pl-3'></i>");
            break;
        case 'co-curricular':
            $(this).append("<i onclick='delSection(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-trash-alt pl-3'></i>");
            break;
        case 'interests':
            $(this).append("<i onclick='delSection(this.parentNode.parentNode)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-trash-alt pl-3'></i>");
            break;
    }

});

$(".resume-body").on('mouseleave', ".section", function () {
    $(".resume-body .fa-plus ").remove();
    $(".resume-body .fa-trash-alt").remove();
});

$(".resume-body").on('mouseenter', '#degree, #skills, #project_name', function () {
    if ($(this).is('#project_name'))
        $(this).append("<i onclick='addLink(this)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-link ml-3'></i>")
    if ($(this).is('#skills'))
        $(this).append("<i onclick='addsubSkill(this)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-plus ml-2'></i>")

    $(this).append("<i onclick='delsubSection(this)' style='font-size:20px; color:lightsteelblue; cursor: pointer;' class='fas fa-trash-alt pl-3'></i>");
});

$('.resume-body').on('mouseleave', '#degree, #skills, #project_name', function () {
    $(".resume-body .fa-trash-alt").remove();
    $(".resume-body .fa-link.ml-3").remove();
    $(".resume-body .fa-plus.ml-2").remove();
});

$('.resume').on('input', 'textarea', function () {
    this.style.height = 'auto';

    this.style.height =
        (this.scrollHeight) + 'px';
});

$('.resume-body').on('keypress', 'textarea', function (evt) {
    if (evt.which == 10 || evt.which == 13) {
        evt.preventDefault();
        console.log(this.parentNode)
        if (!$(this.parentNode).is('#degree') && !$(this.parentNode).is('#project_name')) {
            if ($(this).is('.achievement'))
                $(this.parentNode.parentNode).append("<li class='mt-3' style='display: table;'><i class='fas fa-medal pr-2' style='color:green; font-size: 40px; vertical-align:middle; display:table-cell;'></i><textarea class='achievement ml-2' style='width:510px; display:table-cell;' rows='1' placeholder='tfyucyt'></textarea></li>");
            else {
                if ($(this).is('.award'))
                    $(this.parentNode.parentNode).append("<li style='display:table;' class='mb-4'><i class='fas fa-award pr-2' style='color:green; font-size: 40px; vertical-align:middle; display:table-cell;'></i><textarea class='award ml-2' style='width:330px;display:table-cell;' rows='1' placeholder='tfyucyt'></textarea></li>");
                else {
                    if ($(this).is('.co-act, .interest')){
                        var width = '330px';
                        console.log("interest/co-act");
                    }
                    else{
                        var width = '510px';
                        console.log("not")
                    }
                    console.log("flow")
                    $(this.parentNode.parentNode).append("<li class='mt-3' style='display: table;'><i class='fas fa-arrow-right' style='display: table-cell; vertical-align: middle;'></i><textarea class='interest ml-2' style='width:" + width + "; display: table-cell; vertical-align: middle;' rows='1'>...</textarea></li>");
                }

            }
        }
    }
});

$('.resume-body').on('mouseenter', 'li > span', function () {
    $(this).append("<i style='color:lightsteelblue; cursor: pointer;' class='fas fa-trash-alt pl-3'></i>");
})

$('.resume-body').on('mouseleave', 'li > span', function () {
    $(".resume-body .fa-trash-alt").remove();
})



$(document).ready(function () {
    $('#sidebarCollapse').tooltip().mouseover();
    $('#sidebarCollapse').hover(function () { 
        $(this).css('color','black');
     });
    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
        $('.profile-pic').draggable();
    }
    $(".file-upload").on('change', function () {
        readURL(this);
    });

    $(".upload-button").on('click', function () {
        $(".file-upload").click();
    });
});
