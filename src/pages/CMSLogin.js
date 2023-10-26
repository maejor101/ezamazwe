import "./CMSLogin.css";

const CMSLogin = () => {
  return (
    <div className="cms-login">
      <div className="left-column">
        <img className="left-logo-container" alt="" src="/undefined2.png" />
      </div>
      <div className="right-column">
        <section className="right-form-container">
          <div className="inner-form-container">
            <h1 className="ezamazwe-edutech">EZAMAZWE EDUTECH</h1>
            <h3 className="login-to-your">Login to your account</h3>
            <button className="login-button">
              <div className="login-button-child" />
              <div className="sign-in">SIGN IN</div>
            </button>
            <div className="login-form">
              <div className="text-field">
                <div className="label">Email address</div>
                <input className="text-field2" type="text" />
              </div>
              <div className="text-field">
                <div className="label">Your password</div>
                <input className="text-field2" type="password" />
              </div>
              <div className="forgot-your-password">
                <a href="https://blank.page/" target="_blank">
                  Forgot your password
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CMSLogin;
