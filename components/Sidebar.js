const Sidebar = () => {
  return (
    <nav class="sidebar">
      <ul class="list-unstyled">
        <li>
          <a href="/dashboard/">
            <i class="fas fa-tachometer-alt"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="#submenu1" data-toggle="collapse">
            <i class="fas fa-user"></i> Usuário
          </a>
          <ul id="submenu1" class="list-unstyled collapse">
            <li>
              <a href="/responsaveis">
                <i class="fas fa-users"></i> Usuários
              </a>
            </li>
            <li>
              <a href="/responsaveis/vis-aluno">
                <i class="fas fa-key"></i> Alunos
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#submenu2" data-toggle="collapse">
            <i class="fas fa-list-ul"></i> Home
          </a>
          <ul id="submenu2" class="list-unstyled collapse">
            <li>
              <a href="/vis-home-top">
                <i class="fas fa-file-alt"></i> Home - Topo
              </a>
            </li>
            <li>
              <a href="/vis-home-chamada">
                <i class="fab fa-elementor"></i> Home - Chamada
              </a>
            </li>
            <li>
              <a href="/vis-home-gallery">
                <i class="fas fa-film"></i> Home - Gallery
              </a>
            </li>
            <li>
              <a href="/vis-home-form">
                <i class="fas fa-film"></i> Home - Formulario
              </a>
            </li>
            <li>
              <a href="/vis-home-contagem">
                <i class="fas fa-film"></i> Home - Contagem
              </a>
            </li>
            <li>
              <a href="/vis-home-ensino">
                <i class="fas fa-film"></i> Home - Ensino
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/video/add-video"> Video</a>
        </li>
        <li>
          <a href="/sobre/vis-sobre-topo"> Sobre</a>
        </li>
        <li>
          <a href="/sobre/vis-sobre-lado"> Sobre - 2 Col.</a>
        </li>
        <li>
          <a href="/sobre/vis-sobre-gallery"> Sobre -Gallery</a>
        </li>
        <li>
          <a href="/contato/vis-contato"> Contato</a>
        </li>
        <li>
          <a href="/docentes/vis-docentes"> Docentes</a>
        </li>
        <li>
          <a href="/cursos/vis-curso"> Curso</a>
        </li>
        <li>
          <a href="/blog/visualisar-blog"> Blog</a>
        </li>
        <li>
          <a href="/visualisar-msg"> Mensagens</a>
        </li>
        <li>
          <a href="/visualisar-msg"> Responsaveis</a>
        </li>
        <li>
          <a href="/biblioteca/admin-biblioteca"> Biblioteca</a>
        </li>

        <li>
          <a href="/usuario/logout">
            <i class="fas fa-sign-out-alt"></i> Sair
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
