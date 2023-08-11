import './ThemeToggler.scss';

export const ThemeToggler = () => {
  return (
    <div className='toggle-button'>
      <input
        className='toggle-button__checkbox'
        type='checkbox'
        name='theme-toggler'
        id='theme-toggler'
      />
      <label className='toggle-button__label' htmlFor='theme-toggler'></label>
    </div>
  );
};
