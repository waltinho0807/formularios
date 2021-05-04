import styles from '../styles/Login.module.css'

const Register = () => {
  return (
    <>
    
    <body className={styles.body} >
    <form className={styles.formSignin, 'text-center'} method="POST" action="/usuario/login">
    <img className="mb-4" src="https://res.cloudinary.com/gfslimpeza/image/upload/v1620088460/logo_2_oeps4o.jpg" alt="Fernando" width="72" height="72" />
    <h1 className="h3 mb-3 font-weight-normal">Cadastre-se</h1>
  

    <div className="form-group">
        <label>Usuário</label>
        <input name="email" type="text" className="form-control" placeholder="Digite o usuário"/>
    </div>
    <div class="form-group">
        <label>Senha</label>
        <input name="senha" type="password" className="form-control" placeholder="Digite a senha" />
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Cadatrar</button>
    <p className="text-center">Esqueceu a senha?</p>
</form>
</body>
</>
  );
};
export default Register;