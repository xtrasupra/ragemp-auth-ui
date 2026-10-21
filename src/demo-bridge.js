import EventManager from './EventManager.js';

// The public preview never stores or transmits entered form values.
if (!window.mp) {
  window.__RAGEMP_DEMO__ = true;
  window.mp = { trigger(eventName) {
    const message = eventName.includes('auth:')
      ? 'Демонстрация формы. Данные никуда не отправлены.'
      : 'Действие выбрано. Игровое событие показано в деморежиме.';
    window.dispatchEvent(new CustomEvent('demo-feedback', { detail: message }));
    if (eventName === 'client:user:auth:login') {
      EventManager.emit('authMain', { type: 'showCreatePage' });
    }
  } };
}
