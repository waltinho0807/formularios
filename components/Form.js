const Form = () => {
  return (
    <div class="content p-1">
    <div class="list-group-item">
        <div class="d-flex">
            <div class="mr-auto p-2">
                <h2 class="display-4 titulo">Editar conteúdo Chamada na página inicial</h2>
            </div>
            <div class="p-2">
                <span class="d-none d-md-block">
                    <a href="/vis-home-chamada" class="btn btn-outline-primary btn-sm">Visualizar</a>
                </span>
                <div class="dropdown d-block d-md-none">
                    <button class="btn btn-primary dropdown-toggle btn-sm" type="button" id="acoesListar"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ações
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="acoesListar">
                        <a class="dropdown-item" href="/vis-home-chamada">Visualizar</a>
                    </div>
                </div>
            </div>
        </div>
        
        <hr/>

        <form method="POST" action="/update-home-chamada">
            <input name="_id" type="hidden" value="{{homechamada._id}}"/>


            <div class="form-group col-md-8">
                <label><span class="text-danger">*</span> Titulo </label>
                <input name="titulo" type="text" class="form-control" id="tituloservum"
                    placeholder="Titulo do ícone um" value="{{homechamada.titulo}}" required/>
            </div>
            <div class="form-group">
                <label><span class="text-danger">*</span>Subtitulo</label>
                <textarea name="subtitulo" class="form-control" id="descservdois" placeholder="Descrição do ícone dois"
                    rows="3">//</textarea>
            </div>
            <div class="form-group col-md-4">
                <label><span class="text-danger">*</span> Titulo botão </label>
                <input name="titulobtn" type="text" class="form-control" id="iconeservum"
                    placeholder="Seletor do ícone um" value="{{homechamada.titulobtn}}" required/>
            </div>
            <div class="form-group col-md-8">
                <label><span class="text-danger">*</span> Url botão</label>
                <input name="urlbtn" type="text" class="form-control" id="tituloservum"
                    placeholder="Titulo do ícone um" value="{{homechamada.urlbtn}}" required/>
            </div>



            <p>
                <span class="text-danger">* </span>Campo obrigatório
            </p>
            <button type="submit" class="btn btn-warning">Salvar</button>
        </form>
    </div>
</div>
  );
};

export default Form
