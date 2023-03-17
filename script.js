let userName = document.querySelector('#name');
let date = document.querySelector('#date');
let userComment = document.querySelector('#comment__user');
let button = document.querySelector('.comment');
let result = document.querySelector('#result');

button.addEventListener('click', (e) => {
    
    e.preventDefault();

    if (userName.value === '') return;
    if (date.value === '') date.value = new Date().toISOString().split('T')[0];

    createDeleteElement(userName.value, date.value, userComment.value);

    userName.value = '';
    date.value = '';
    userComment.value = '';

    if (userName.classList.contains('invalid')) {
        userName.classList.remove('invalid');
        error.innerHTML = "";
    }

});

userName.onblur = function() {
    if (!userName.value.includes('@')) {
        userName.classList.add('invalid');
        error.innerHTML = 'Пожалуйста, введите правильный email.';
    }
};
  
userName.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
};

function createDeleteElement(...value) {

    let divWrapper = document.createElement('div');
    divWrapper.classList = 'wrapper__comment';

    let wrapperNameDate = document.createElement('div');
    wrapperNameDate.classList = 'wrapper__name-date';

    let divName = document.createElement('div');
    divName.classList = 'user__name';
    divName.textContent = userName.value;

    let divDate = document.createElement('div');
    divDate.classList = 'user__date';
    divDate.textContent = date.value;

    let wrapperUserText = document.createElement('div');
    wrapperUserText.classList = 'wrapper__user-text';

    let divComment = document.createElement('div');
    divComment.classList = 'user__comment';
    divComment.textContent = userComment.value;

    let wrapperIcon = document.createElement('div');
    wrapperIcon.classList = 'wrapper__icon';

    let spanLike = document.createElement('span');
    spanLike.classList = 'like';

    let spanDelete = document.createElement('span');
    spanDelete.classList = 'delete';

    spanDelete.addEventListener('click', (e) => {
        result.removeChild(divWrapper);
    });

    spanLike.addEventListener('click', (e) => {
        spanLike.classList.add('red');
    });

    result.append(divWrapper);
    divWrapper.append(wrapperNameDate, wrapperUserText);
    wrapperNameDate.append(divName, divDate);
    wrapperUserText.append(divComment, wrapperIcon);
    wrapperIcon.append(spanLike, spanDelete);

}