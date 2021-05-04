const Sidebar = () => {
  return (
    <nav class="sidebar">
      <ul class="list-unstyled">
        <li>
          <a href="/dashboard">
            <i class="fas fa-tachometer-alt"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="#submenu1" data-toggle="collapse">
            <i class="fas fa-user"></i> Competições
          </a>
          <ul id="submenu1" class="list-unstyled collapse">
            <li>
              <a href="/responsaveis">
                <i class="fas fa-users"></i> Etapas
              </a>
            </li>
            <li>
              <a href="/responsaveis/vis-aluno">
                <i class="fas fa-key"></i> Campeonatos
              </a>
            </li>
            <li>
              <a href="/responsaveis/vis-aluno">
                <i class="fas fa-key"></i> Hist. Habitualidades
              </a>
            </li>
            <li>
              <a href="/responsaveis/vis-aluno">
                <i class="fas fa-key"></i>Lançar Habitualidades
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/video/add-video"> Meus Dados</a>
        </li>
        <li>
          <a href="/video/add-video"> Declarações</a>
        </li>
        <li>
          <a href="#submenu2" data-toggle="collapse">
            <i class="fas fa-list-ul"></i> Financeiro
          </a>
          <ul id="submenu2" class="list-unstyled collapse">
            <li>
              <a href="/vis-home-top">
                <i class="fas fa-file-alt"></i> Boletos
              </a>
            </li>
            <li>
              <a href="/vis-home-chamada">
                <i class="fab fa-elementor"></i> Creditos
              </a>
            </li>
            <li>
              <a href="/vis-home-gallery">
                <i class="fas fa-film"></i> Loja
              </a>
            </li>
            <li>
              <a href="/vis-home-form">
                <i class="fas fa-film"></i> Movimentações
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#submenu2" data-toggle="collapse">
            <i class="fas fa-list-ul"></i> Secretaria
          </a>
          <ul id="submenu2" class="list-unstyled collapse">
            <li>
              <a href="/vis-home-top">
                <i class="fas fa-file-alt"></i> Despachante
              </a>
            </li>
            <li>
              <a href="/vis-home-chamada">
                <i class="fab fa-elementor"></i> Agendamento
              </a>
            </li>
            <li>
              <a href="/vis-home-gallery">
                <i class="fas fa-film"></i> Loja
              </a>
            </li>
            <li>
              <a href="/vis-home-form">
                <i class="fas fa-film"></i> Movimentações
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/video/add-video"> Despacho de armas</a>
        </li>
        <li>
          <a href="/sobre/vis-sobre-topo"> Carteira de filiação</a>
        </li>
        <li>
          <a href="/sobre/vis-sobre-lado"> Prestação de contas</a>
        </li>
        <li>
          <a href="/sobre/vis-sobre-gallery"> Termos/Notificações</a>
        </li>
        <li>
          <a href="/contato/vis-contato"> Tutoriais</a>
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
