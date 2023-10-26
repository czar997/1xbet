import mobileNav from './modules/mobile-nav.js';
mobileNav();
import { Swiper } from 'swiper';
document.addEventListener('DOMContentLoaded', () => {
  const swiperBanner = new Swiper('.swiper', {
    loop: true,
    slideClass: 'banner-slide',
  });

  // Табы тарифов
  const tariff = document.querySelectorAll('.acctariff__item');
  const tariffStats = document.querySelectorAll('.tariff-on');
  if (tariff.length > 0 && tariffStats.length > 0) {
    tariff.forEach((item) => {
      item.addEventListener('click', () => {
        tariff.forEach((tariffItem) => {
          tariffItem.classList.remove('acctariff__item-basic', 'acctariff__item-partner', 'acctariff__item-premium');
        });

        const tab = item.getAttribute('data-tab');
        if (tab === 'basic') {
          item.classList.add('acctariff__item-basic');
        } else if (tab === 'partner') {
          item.classList.add('acctariff__item-partner');
        } else if (tab === 'premium') {
          item.classList.add('acctariff__item-premium');
        }
        tariffStats.forEach((tabContent) => {
          tabContent.classList.remove('active-tab');
        });

        const selectedTab = document.getElementById(tab);
        if (selectedTab) {
          selectedTab.classList.add('active-tab');
        }
      });
    });
  }

  //   Матч-таймы табы
  const halfTime = document.querySelectorAll('.half');
  if (halfTime.length > 0) {
    halfTime.forEach((half) => {
      half.addEventListener('click', () => {
        halfTime.forEach((otherHalf) => {
          otherHalf.classList.remove('half-active');
        });
        half.classList.add('half-active');
      });
    });
  }
  // Табы аккаунт
  const accounTab = document.querySelectorAll('.account__tab');
  const tabInner = document.querySelectorAll('.acc-tabs');

  if (accounTab.length > 0 && tabInner.length > 0) {
    accounTab.forEach((el) => {
      el.addEventListener('click', () => {
        accounTab.forEach((accTab) => {
          accTab.classList.remove('acctab-active');
        });
        el.classList.add('acctab-active');
        const tab = el.getAttribute('data-tab');
        tabInner.forEach((tabContent) => {
          tabContent.classList.remove('acc__active');
        });
        const selectedTab = document.getElementById(tab);
        if (selectedTab) {
          selectedTab.classList.add('acc__active');
        }
      });
    });
  }
  // чекбокс лиги
  const checkSwitch = document.querySelector('.checkbox-switch');
  if (checkSwitch) {
    checkSwitch.addEventListener('click', () => {
      checkSwitch.classList.toggle('active');
    });
  }

  // показать/скрыть пароль инпутов
  const eyeIcons = document.querySelectorAll('.eye-input img');
  if (eyeIcons.length > 0) {
    eyeIcons.forEach(function (icon) {
      icon.addEventListener('click', function () {
        const inputId = this.getAttribute('data-password');
        const inputField = document.getElementById(inputId);

        if (inputField.getAttribute('type') === 'password') {
          inputField.setAttribute('type', 'text');
          this.parentElement.classList.add('eye-input-active');
        } else {
          inputField.setAttribute('type', 'password');
          this.parentElement.classList.remove('eye-input-active');
        }
      });
    });
  }
  // ошибки в форме
  const regForm = document.querySelector('.registration__form');
  const emailInput = document.getElementById('registration-email');
  const errorMessage = document.getElementById('error-email-message');
  const passInput = document.getElementById('registration-pass');
  const errorPassMessage = document.getElementById('error-pass-message');
  const repeatPassInput = document.getElementById('registration-repeat_pass');
  const errorRepeatPassMessage = document.getElementById('error-repeat-pass-message');
  if (emailInput && errorMessage && passInput && errorPassMessage && repeatPassInput && errorRepeatPassMessage && regForm) {
    emailInput.addEventListener('invalid', function (event) {
      event.preventDefault();
      errorMessage.textContent = 'Пожалуйста, укажите корректный e-mail.';
    });
    passInput.addEventListener('invalid', function (event) {
      event.preventDefault();
      errorPassMessage.textContent = 'Пожалуйста, введите пароль.';
    });
    regForm.addEventListener('submit', function (event) {
      if (passInput.value !== repeatPassInput.value) {
        event.preventDefault();
        errorRepeatPassMessage.textContent = 'Пароли не совпадают.';
      } else {
        errorRepeatPassMessage.textContent = '';
      }
    });
  }
});
