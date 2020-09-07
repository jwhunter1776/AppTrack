var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');
var home = document.getElementById('home');
var positiontype = document.getElementById('positiontype');
var recruiting = document.getElementById('recruiting');
var applied = document.getElementById('applied');

menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
});

home.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposDark.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/dappliedposLight.svg';
    e.preventDefault();
});

positiontype.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposLight.svg';
    document.getElementById('positiontypeImg').src='Images/apositionDark.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/dappliedposLight.svg';
    e.preventDefault();
});

recruiting.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposLight.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoDark.svg';
    document.getElementById('appliedImg').src='Images/dappliedposLight.svg';
    e.preventDefault();
});

applied.addEventListener('click', function(e){
    document.getElementById('homeImg').src='Images/dappliedposLight.svg';
    document.getElementById('positiontypeImg').src='Images/apositionLight.svg';
    document.getElementById('recruitingImg').src='Images/arecruitingcoLight.svg';
    document.getElementById('appliedImg').src='Images/dappliedposDark.svg';
    e.preventDefault();
});
