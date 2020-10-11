defmodule ExApp.MessagesUtil do

  alias ExApp.ReturnUtil
  
  def systemMessage(messageCode,parameters \\ []) do
    cond do
      (messageCode == 0) -> ReturnUtil.getOperationError("Erro de operação.")
      (messageCode == 200) -> ReturnUtil.getOperationSuccess(200,"",Enum.at(parameters,0))
      (messageCode == 201) -> ReturnUtil.getOperationSuccess(201,"")
      (messageCode == 204) -> ReturnUtil.getOperationSuccess(204,"")
      (messageCode == 205) -> ReturnUtil.getValidationResult(205,"OK")
      (messageCode == 207) -> ReturnUtil.getOperationSuccess(207,"")
      (messageCode == 208) -> ReturnUtil.getOperationSuccess(208,"")
      (messageCode == 209) -> ReturnUtil.getOperationSuccess(209,Enum.at(parameters,0))
      (messageCode == 210) -> ReturnUtil.getOperationSuccess(210,Enum.at(parameters,0))
      (messageCode == 211) -> ReturnUtil.getOperationSuccess(211,Enum.at(parameters,0))
      (messageCode == 212) -> ReturnUtil.getOperationSuccess(212,Enum.at(parameters,0))
      (messageCode == 403) -> ReturnUtil.getOperationError("Falta de permissão de acesso ao recurso.")
	  (messageCode == 412) -> ReturnUtil.getOperationError("Falha de pré condição.")
	  (messageCode == 413) -> ReturnUtil.getOperationError("[TESTE] Falha de pré condição.")
	  (messageCode == 480) -> ReturnUtil.getValidationResult(480,
	                          """
	                          Preencher corretamente os campos requeridos 
	                          para criar novo(a) <strong>#{Enum.at(parameters,0)}</strong>.
	                          """)
	  (messageCode == 481) -> ReturnUtil.getValidationResult(481,
	                          """
	                          Preencher corretamente os campos requeridos 
	                          para alterar <strong>#{Enum.at(parameters,0)}</strong>.
	                          """)
	  (messageCode == 482) -> ReturnUtil.getValidationResult(482,
	                          "Falha ao criar novo(a) <strong>#{Enum.at(parameters,0)}</strong>.")
	  (messageCode == 483) -> ReturnUtil.getValidationResult(483,
	                          "Falha ao alterar <strong>#{Enum.at(parameters,0)}</strong>.")
      (messageCode == 100000) -> ReturnUtil.getValidationResult(100000,
                                 """
                                 Já existe uma pessoa/usuário com o email: 
                                 <strong>#{Enum.at(parameters,0)}</strong>.
                                 """)
      (messageCode == 100001) -> ReturnUtil.getValidationResult(100001,
                                 """
                                 Mudança de categoria não permitida para a 
                                 <strong>pessoa/usuário</strong> em questão.
                                 """)
      (messageCode == 100002) -> ReturnUtil.getValidationResult(100002,
                                 """
                                 <strong>Ticket de pagamento da pessoa/usuário</strong> 
                                 em questão já está pago, não pode ser excluído.
                                 """)
      (messageCode == 100003) -> ReturnUtil.getValidationResult(100003,
                                 "<strong>Pessoa/Usuário</strong> em questão não pode ser excluída.")
      (messageCode == 100004) -> ReturnUtil.getValidationResult(100004,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Nome</strong>, 
                                 <strong>E-mail</strong> 
                                 e <strong>Senha</strong>.
                                 """)
      (messageCode == 100005) -> ReturnUtil.getValidationResult(100005,
                                 "Falha ao criar <strong>pessoa/usuário</strong>.")
      (messageCode == 100006) -> ReturnUtil.getValidationResult(100006,
                                 "Falha ao efetuar <strong>registro</strong>.")
      (messageCode == 100007) -> ReturnUtil.getValidationResult(100007,
                                 "Falha ao alterar <strong>pessoa/usuário</strong>.")
      (messageCode == 100008) -> ReturnUtil.getValidationResult(100008,
                                 "Não foi possível ativar <strong>usuário</strong>.")
      (messageCode == 100009) -> ReturnUtil.getValidationResult(100009,"Falha ao ativar <strong>usuário</strong>.")
      (messageCode == 100011) -> ReturnUtil.getValidationResult(100011,"Falha ao recuperar <strong>senha</strong>.")
      (messageCode == 100012) -> ReturnUtil.getValidationResult(100012,
                                 "Falha ao criar <strong>ticket de pagamento</strong>.")
      (messageCode == 100013) -> ReturnUtil.getValidationResult(100013,
                                 "Falha ao alterar <strong>ticket de pagamento</strong>.")
      (messageCode == 100014) -> ReturnUtil.getValidationResult(100014,
                                 "<strong>E-mail</strong> em processamento, não pode ser alterado.")
      (messageCode == 100015) -> ReturnUtil.getValidationResult(100015,
                                 "<strong>E-mail</strong> em processamento, não pode ser excluído.")
      (messageCode == 100016) -> ReturnUtil.getValidationResult(100016,"Falha ao criar <strong>e-mail</strong>.")
      (messageCode == 100017) -> ReturnUtil.getValidationResult(100017,"Falha ao alterar <strong>e-mail</strong>.")
      (messageCode == 100018) -> ReturnUtil.getValidationResult(100018,
                                 """
                                 <strong>E-mail</strong> já enviado para 1 ou mais destinatários, 
                                 não pode ser alterado.
                                 """)
      (messageCode == 100019) -> ReturnUtil.getValidationResult(100019,
                                 """
                                 O e-mail: <strong>#{Enum.at(parameters,0)}</strong>, 
                                 não se encaixa nas regras para novo registro.
                                 """)
      (messageCode == 100020) -> ReturnUtil.getValidationResult(100020,
                                 """
                                 Obrigatório informar corretamente os campos 
                                 <strong>Token de Usuário Site Sympla</strong>, 
                                 <strong>URL Evento Site Sympla</strong> e 
                                 <strong>Identificador do Evento Site Sympla</strong>.
                                 """)
      (messageCode == 100021) -> ReturnUtil.getValidationResult(100021,
                                 "Falha ao criar <strong>configuração site sympla</strong>.")
      (messageCode == 100022) -> ReturnUtil.getValidationResult(100022,
                                 "Falha ao alterar <strong>configuração site sympla</strong>.")
      (messageCode == 100023) -> ReturnUtil.getValidationResult(100023,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Provedor</strong>, 
                                 <strong>Identificação</strong>,
                                 <strong>Login/Endereço de E-mail</strong>, 
                                 <strong>Senha</strong> e <strong>Replay-To</strong>.
                                 """)
      (messageCode == 100024) -> ReturnUtil.getValidationResult(100024,
                                 "Falha ao criar <strong>configuração envio e-mail</strong>.")
      (messageCode == 100025) -> ReturnUtil.getValidationResult(100025,
                                 "Falha ao alterar <strong>configuração envio e-mail</strong>.")
      (messageCode == 100026) -> ReturnUtil.getValidationResult(100026,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong> 
                                 e <strong>Link</strong>.
                                 """)
      (messageCode == 100027) -> ReturnUtil.getValidationResult(100027,"Falha ao criar <strong>arquivo</strong>.")
      (messageCode == 100028) -> ReturnUtil.getValidationResult(100028,"Falha ao alterar <strong>arquivo</strong>.")
      (messageCode == 100029) -> ReturnUtil.getValidationResult(100029,"Falha ao criar <strong>imagem</strong>.")
      (messageCode == 100030) -> ReturnUtil.getValidationResult(100030,"Falha ao alterar <strong>imagem</strong>.")
      (messageCode == 100031) -> ReturnUtil.getValidationResult(100031,
                                 "Obrigatório informar campo <strong>Identificação</strong>.")
      (messageCode == 100032) -> ReturnUtil.getValidationResult(100032,"Falha ao criar <strong>menu</strong>.")
      (messageCode == 100033) -> ReturnUtil.getValidationResult(100033,"Falha ao alterar <strong>menu</strong>.")
      (messageCode == 100034) -> ReturnUtil.getValidationResult(100034,"<strong>Menu</strong> informado não existe.")
      (messageCode == 100035) -> ReturnUtil.getValidationResult(100035,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong> 
                                 e <strong>Conteúdo</strong>.
                                 """)
      (messageCode == 100036) -> ReturnUtil.getValidationResult(100036,"Falha ao criar <strong>item menu</strong>.")
      (messageCode == 100037) -> ReturnUtil.getValidationResult(100037,"Falha ao alterar <strong>item menu</strong>.")
      (messageCode == 100038) -> ReturnUtil.getValidationResult(100038,
                                 "<strong>Item menu</strong> informado não existe.")
      (messageCode == 100039) -> ReturnUtil.getValidationResult(100039,
                                 "Falha ao criar <strong>arquivo item menu</strong>.")
      (messageCode == 100040) -> ReturnUtil.getValidationResult(100040,
                                 "Falha ao alterar <strong>arquivo item menu</strong>.")
      (messageCode == 100041) -> ReturnUtil.getValidationResult(100041,
                                 "<strong>Arquivo</strong> informado não existe.")
      (messageCode == 100042) -> ReturnUtil.getValidationResult(100042,
                                 "<strong>Arquivo</strong> informado já está adicionado ao Item Menu.")
      (messageCode == 100043) -> ReturnUtil.getValidationResult(100043,
                                 """
                                 <strong>Sistema Pagamento</strong> para inclusão deve ser 
                                 <strong>Manual/Sem Integração</strong>.
                                 """)
      (messageCode == 100044) -> ReturnUtil.getValidationResult(100044,
                                 """
                                 <strong>Sistema Pagamento</strong> não pode ser alterado de 
                                 <strong>Manual/Sem Integração</strong> para outro Sistema Pagamento.
                                 """)
      (messageCode == 100045) -> ReturnUtil.getValidationResult(100045,
                                 """
                                 <strong>Valor Pagamento</strong> não pode ser maior que 
                                 <strong>Valor Inscrição</strong>.
                                 """)
      (messageCode == 100046) -> ReturnUtil.getValidationResult(100046,
                                 """
                                 Para <strong>Valor Pagamento</strong> diferente do <strong>Valor Inscrição</strong>, 
                                 deve se informar um <strong>Código Desconto/Promocional</strong>.
                                 """)
      (messageCode == 100047) -> ReturnUtil.getValidationResult(100047,"Falha ao criar <strong>módulo</strong>.")
      (messageCode == 100048) -> ReturnUtil.getValidationResult(100048,"Falha ao alterar <strong>módulo</strong>.")
      (messageCode == 100049) -> ReturnUtil.getValidationResult(100049,
                                 "<strong>Módulo</strong> informado já está adicionado na aplicação.")
      (messageCode == 100050) -> ReturnUtil.getValidationResult(100050,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong>, 
                                 <strong>Imagem</strong> 
                                 e <strong>Skin Default</strong>.
                                 """)
      (messageCode == 100051) -> ReturnUtil.getValidationResult(100051,"Falha ao criar <strong>tema</strong>.")
      (messageCode == 100052) -> ReturnUtil.getValidationResult(100052,"Falha ao alterar <strong>tema</strong>.")
      (messageCode == 100053) -> ReturnUtil.getValidationResult(100053,
                                 """
                                 Já existe outro <strong>tema</strong> ativo para a aplicação. 
                                 Não é permitido ter mais de um tema ativo ao mesmo tempo.
                                 """)
      (messageCode == 100054) -> ReturnUtil.getValidationResult(100054,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong>, 
                                 <strong>Descrição</strong> e <strong>Url Site</strong>.
                                 """)
      (messageCode == 100055) -> ReturnUtil.getValidationResult(100055,
                                 """
                                 Já existe outra <strong>configuração</strong> ativa para a aplicação. 
                                 Não é permitido ter mais de uma configuração ativa ao mesmo tempo.
                                 """)
      (messageCode == 100056) -> ReturnUtil.getValidationResult(100056,
                                 "Falha ao criar <strong>configuração</strong>.")
      (messageCode == 100057) -> ReturnUtil.getValidationResult(100057,
                                 "Falha ao alterar <strong>configuração</strong>.")
      (messageCode == 100058) -> ReturnUtil.getValidationResult(100058,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong> 
                                 e <strong>Descrição</strong>.
                                 """)
      (messageCode == 100059) -> ReturnUtil.getValidationResult(100059,
                                 "Falha ao criar <strong>Unidade Medida</strong>.")
      (messageCode == 100060) -> ReturnUtil.getValidationResult(100060,
                                 "Falha ao alterar <strong>Unidade Medida</strong>.")
      (messageCode == 100061) -> ReturnUtil.getValidationResult(100061,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong>, 
                                 <strong>Volume/(Qtde)</strong> e <strong>Unidade Medida</strong>.
                                 """)
      (messageCode == 100062) -> ReturnUtil.getValidationResult(100062,
                                 "Falha ao criar <strong>material/produto</strong>.")
      (messageCode == 100063) -> ReturnUtil.getValidationResult(100063,
                                 "Falha ao alterar <strong>material/produto</strong>.")
      (messageCode == 100064) -> ReturnUtil.getValidationResult(100064,
                                 "<strong>Unidade Medida</strong> informada não existe.")
      (messageCode == 100065) -> ReturnUtil.getValidationResult(100065,
                                 "<strong>Pessoa/Usuário</strong> informada não existe.")
      (messageCode == 100066) -> ReturnUtil.getValidationResult(100066,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong> 
                                 e <strong>Tipo</strong>.
                                 """)
      (messageCode == 100067) -> ReturnUtil.getValidationResult(100067,
                                 "Falha ao criar <strong>Grupo Lançamento</strong>.")
      (messageCode == 100068) -> ReturnUtil.getValidationResult(100068,
                                 "Falha ao alterar <strong>Grupo Lançamento</strong>.")
      (messageCode == 100069) -> ReturnUtil.getValidationResult(100069,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong>, 
                                 <strong>Data Início</strong>, <strong>Data Término</strong>
                                 e <strong>Skin Default</strong>.
                                 """)
      (messageCode == 100070) -> ReturnUtil.getValidationResult(100070,
                                 "Falha ao criar <strong>Evento/Atividade</strong>.")
      (messageCode == 100071) -> ReturnUtil.getValidationResult(100071,
                                 "Falha ao alterar <strong>Evento/Atividade</strong>.")
      (messageCode == 100072) -> ReturnUtil.getValidationResult(100072,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Grupo Lançamento</strong>, 
                                 <strong>Material/Produto</strong>, <strong>Quantidade</strong>, 
                                 <strong>Custo/Valor Unitário</strong>, 
                                 <strong>Tipo</strong> e <strong>Data</strong>.
                                 """)
      (messageCode == 100073) -> ReturnUtil.getValidationResult(100073,
                                 "Falha ao criar <strong>Lançamento Caixa</strong>.")
      (messageCode == 100074) -> ReturnUtil.getValidationResult(100074,
                                 "Falha ao alterar <strong>Lançamento Caixa</strong>.")
      (messageCode == 100075) -> ReturnUtil.getValidationResult(100075,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída, 
                                 pois tem <strong>pessoa/usuário</strong> em sua responsabilidade.
                                 """)
      (messageCode == 100076) -> ReturnUtil.getValidationResult(100076,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>ticket pagamento</strong> em sua responsabilidade.
                                 """)
      (messageCode == 100077) -> ReturnUtil.getValidationResult(100077,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois possui <strong>ticket pagamento</strong> em seu nome.
                                 """)
      (messageCode == 100078) -> ReturnUtil.getValidationResult(100078,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>pessoa/usuário</strong> em sua responsabilidade.
                                 """)
      (messageCode == 100079) -> ReturnUtil.getValidationResult(100079,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>ticket pagamento</strong> em sua responsabilidade.
                                 """)
      (messageCode == 100080) -> ReturnUtil.getValidationResult(100080,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>integração site sympla</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100081) -> ReturnUtil.getValidationResult(100081,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>integração site sympla</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100082) -> ReturnUtil.getValidationResult(100082,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>e-mail</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100083) -> ReturnUtil.getValidationResult(100083,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>e-mail</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100084) -> ReturnUtil.getValidationResult(100084,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>arquivo item menu</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100085) -> ReturnUtil.getValidationResult(100085,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>arquivo item menu</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100086) -> ReturnUtil.getValidationResult(100086,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>item menu</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100087) -> ReturnUtil.getValidationResult(100087,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>item menu</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100088) -> ReturnUtil.getValidationResult(100088,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>menu</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100089) -> ReturnUtil.getValidationResult(100089,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>menu</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100090) -> ReturnUtil.getValidationResult(100090,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>módulo</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100091) -> ReturnUtil.getValidationResult(100091,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>módulo</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100092) -> ReturnUtil.getValidationResult(100092,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>unidade medida</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100093) -> ReturnUtil.getValidationResult(100093,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>unidade medida</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100094) -> ReturnUtil.getValidationResult(100094,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>material/produto</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100095) -> ReturnUtil.getValidationResult(100095,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>material/produto</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100096) -> ReturnUtil.getValidationResult(100096,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>configuração e-mail</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100097) -> ReturnUtil.getValidationResult(100097,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>configuração e-mail</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100098) -> ReturnUtil.getValidationResult(100098,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>imagem</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100099) -> ReturnUtil.getValidationResult(100099,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>imagem</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100100) -> ReturnUtil.getValidationResult(100100,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>arquivo</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100101) -> ReturnUtil.getValidationResult(100101,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>arquivo</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100102) -> ReturnUtil.getValidationResult(100102,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>tema aplicação</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100103) -> ReturnUtil.getValidationResult(100103,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>tema aplicação</strong> em sua responsabilidade.
                                 """)    
      (messageCode == 100104) -> ReturnUtil.getValidationResult(100104,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>evento/atividade</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100105) -> ReturnUtil.getValidationResult(100105,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>evento/atividade</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100106) -> ReturnUtil.getValidationResult(100106,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>configuração aplicação</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100107) -> ReturnUtil.getValidationResult(100107,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>configuração aplicação</strong> em sua responsabilidade.
                                 """)    
      (messageCode == 100108) -> ReturnUtil.getValidationResult(100108,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>grupo lançamento</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100109) -> ReturnUtil.getValidationResult(100109,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>grupo lançamento</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100110) -> ReturnUtil.getValidationResult(100110,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>lançamento caixa</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100111) -> ReturnUtil.getValidationResult(100111,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>lançamento caixa</strong> em sua responsabilidade.
                                 """)
      (messageCode == 100112) -> ReturnUtil.getValidationResult(100112,
                                 """
                                 <strong>Menu</strong> em questão não pode ser excluído,
                                 pois tem <strong>item menu</strong> vinculado.
                                 """)
      (messageCode == 100113) -> ReturnUtil.getValidationResult(100113,
                                 """
                                 <strong>Item Menu</strong> em questão não pode ser excluído,
                                 pois tem <strong>arquivo item menu</strong> vinculado.
                                 """) 
      (messageCode == 100114) -> ReturnUtil.getValidationResult(100114,
                                 """
                                 <strong>Arquivo</strong> em questão não pode ser excluído,
                                 pois está vinculado à <strong>item menu</strong>.
                                 """)    
      (messageCode == 100115) -> ReturnUtil.getValidationResult(100115,
                                 """
                                 <strong>Unidade Medida</strong> em questão não pode ser excluída,
                                 pois está vinculado à <strong>material/produto</strong>.
                                 """) 
      (messageCode == 100116) -> ReturnUtil.getValidationResult(100116,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>configuração email</strong> vinculada.
                                 """)  
      (messageCode == 100117) -> ReturnUtil.getValidationResult(100117,
                                 """
                                 <strong>Grupo Lançamento</strong> em questão não pode ser excluído,
                                 pois tem <strong>lançamento caixa</strong> vinculado.
                                 """) 
      (messageCode == 100118) -> ReturnUtil.getValidationResult(100118,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>lançamento caixa</strong> vinculado.
                                 """)  
      (messageCode == 100119) -> ReturnUtil.getValidationResult(100119,
                                 """
                                 <strong>Material/Produto</strong> em questão não pode ser excluído,
                                 pois tem <strong>lançamento caixa</strong> vinculado.
                                 """)
      (messageCode == 100120) -> ReturnUtil.getValidationResult(100120,
                                 """
                                 <strong>Integração Site Sympla</strong> em questão não pode ser excluída,
                                 pois está vinculada à <strong>evento/atividade</strong>.
                                 """) 
      (messageCode == 100121) -> ReturnUtil.getValidationResult(100121,
                                 """
                                 <strong>Integração Site Sympla</strong> em questão já está
                                 vinculada à outro <strong>evento/atividade</strong>.
                                 """)
      (messageCode == 100122) -> ReturnUtil.getValidationResult(100122,
                                 "<strong>Integração Site Sympla</strong> informada não existe.")    
      (messageCode == 100123) -> ReturnUtil.getValidationResult(100123,
                                 "<strong>Grupo Lançamento</strong> informado não existe.")    
      (messageCode == 100124) -> ReturnUtil.getValidationResult(100124,
                                 "<strong>Material/Produto</strong> informado não existe.")    
      (messageCode == 100125) -> ReturnUtil.getValidationResult(100125,
                                 "<strong>Unidade Medida</strong> informada não existe.")    
      (messageCode == 100126) -> ReturnUtil.getValidationResult(100126,
                                 "<strong>Evento/Atividade</strong> informado não existe.")   
      (messageCode == 100127) -> ReturnUtil.getValidationResult(100127,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>configuração AWS S3</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100128) -> ReturnUtil.getValidationResult(100128,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>configuração AWS S3</strong> em sua responsabilidade.
                                 """)  
      (messageCode == 100129) -> ReturnUtil.getValidationResult(100129,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Bucket Name</strong>, 
                                 <strong>Bucket URL</strong>, <strong>Region</strong>, <strong>Version</strong>, 
                                 <strong>Key</strong> e <strong>Secret</strong>.
                                 """)
      (messageCode == 100130) -> ReturnUtil.getValidationResult(100130,
                                 "Falha ao criar <strong>configuração AWS S3</strong>.")
      (messageCode == 100131) -> ReturnUtil.getValidationResult(100131,
                                 "Falha ao alterar <strong>configuração AWS S3</strong>.")
      (messageCode == 100132) -> ReturnUtil.getValidationResult(100132,
                                 """
                                 Já existe outra <strong>configuração AWS S3</strong> ativa para a aplicação. 
                                 Não é permitido ter mais de uma configuração AWS S3 ativa ao mesmo tempo.
                                 """)
      (messageCode == 100133) -> ReturnUtil.getValidationResult(100133,
                                 """
                                 Erro ao ativar <strong>configuração AWS S3</strong> para a aplicação.
                                 """)
      (messageCode == 100134) -> ReturnUtil.getValidationResult(100134,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>artigo blog</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100135) -> ReturnUtil.getValidationResult(100135,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>artigo blog</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100136) -> ReturnUtil.getValidationResult(100136,"Falha ao criar <strong>Artigo Blog</strong>.")
      (messageCode == 100137) -> ReturnUtil.getValidationResult(100137,"Falha ao alterar <strong>Artigo Blog</strong>.")
      (messageCode == 100138) -> ReturnUtil.getValidationResult(100138,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>comentário artigo blog</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100139) -> ReturnUtil.getValidationResult(100139,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>comentário artigo blog</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100140) -> ReturnUtil.getValidationResult(100140,
                                 "Falha ao criar <strong>Comentário Artigo Blog</strong>.")
      (messageCode == 100141) -> ReturnUtil.getValidationResult(100141,
                                 "Falha ao alterar <strong>Comentário Artigo Blog</strong>.")
      (messageCode == 100142) -> ReturnUtil.getValidationResult(100142,
                                 "<strong>Artigo Blog</strong> informado não existe.")
      (messageCode == 100143) -> ReturnUtil.getValidationResult(100143,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Nome</strong>, 
                                 <strong>E-mail</strong> e <strong>Conteúdo</strong>.
                                 """)
      (messageCode == 100144) -> ReturnUtil.getValidationResult(100144,
                                 """
                                 <strong>Artigo Blog</strong> em questão não pode ser excluído,
                                 pois tem <strong>comentário artigo blog</strong> vinculado.
                                 """)
      (messageCode == 100145) -> ReturnUtil.getValidationResult(100145,
                                 """
                                 <strong>Item Menu</strong> em questão não pode ser excluído,
                                 pois tem <strong>artigo blog</strong> vinculado.
                                 """)
      (messageCode == 100146) -> ReturnUtil.getValidationResult(100146,
                                 """
                                 <strong>Menu</strong> em questão não pode ser excluído,
                                 pois tem <strong>artigo blog</strong> vinculado.
                                 """)
      (messageCode == 100147) -> ReturnUtil.getValidationResult(100147,
                                 """
                                 Admin Master não pode criar usuário com permissão 
                                 <strong>Comunicação/Acesso Externa</strong>.
                                 """)
      (messageCode == 100148) -> ReturnUtil.getValidationResult(100148,"Falha ao criar <strong>Object</strong>.")
      (messageCode == 100149) -> ReturnUtil.getValidationResult(100149,"Falha ao alterar <strong>Object</strong>.")
      (messageCode == 100150) -> ReturnUtil.getValidationResult(100150,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong> 
                                 e <strong>Label</strong>.
                                 """)
      (messageCode == 100151) -> ReturnUtil.getValidationResult(100151,
                                 """
                                 <strong>Object</strong> em questão não pode ser excluído,
                                 pois tem <strong>object field</strong> vinculado.
                                 """)
      (messageCode == 100152) -> ReturnUtil.getValidationResult(100152,
                                 "Falha ao criar <strong>Object Field</strong>.")
      (messageCode == 100153) -> ReturnUtil.getValidationResult(100153,
                                 "Falha ao alterar <strong>Object Field</strong>.")
      (messageCode == 100154) -> ReturnUtil.getValidationResult(100154,
                                 """
                                 Obrigatório informar corretamente os campos <strong>Identificação</strong>, 
                                 <strong>Label</strong>, <strong>Tipo</strong> e <strong>Tamanho</strong>.
                                 """)
      (messageCode == 100155) -> ReturnUtil.getValidationResult(100155,
                                 "<strong>Object</strong> informado não existe.") 
      (messageCode == 100156) -> ReturnUtil.getValidationResult(100156,
                                 "Erro ao gerar <strong>Código</strong> para object.") 
      (messageCode == 100157) -> ReturnUtil.getValidationResult(100157,
                                 "Erro ao remover <strong>Código</strong> de object.") 
      (messageCode == 100158) -> ReturnUtil.getValidationResult(100158,"Falha ao criar <strong>Project</strong>.")
      (messageCode == 100159) -> ReturnUtil.getValidationResult(100159,"Falha ao alterar <strong>Project</strong>.")
      (messageCode == 100160) -> ReturnUtil.getValidationResult(100160,
                                 """
                                 <strong>ObjectField</strong> com uma identificação semelhante já existe 
                                 para o Object em questão.
                                 """)
      (messageCode == 100161) -> ReturnUtil.getValidationResult(100161,
                                 """
                                 <strong>Object</strong> com uma identificação semelhante 
                                 <strong>já existe</strong>.
                                 """)
      (messageCode == 100162) -> ReturnUtil.getValidationResult(100162,
                                 """
                                 <strong>Project</strong> com uma identificação semelhante 
                                 <strong>já existe</strong>.
                                 """)
      (messageCode == 100163) -> ReturnUtil.getValidationResult(100163,
                                 """
                                 <strong>Object</strong> em questão não pode ser excluído,
                                 pois está vinculado em um ou mais <strong>Project</strong>.
                                 """)
      (messageCode == 100164) -> ReturnUtil.getValidationResult(100164,
                                 """
                                 <strong>Identificação</strong> menor que tamanho mínimo (5) caracteres.
                                 """)
      (messageCode == 100165) -> ReturnUtil.getValidationResult(100165,
                                 """
                                 <strong>Diretório</strong> já existe. Escolha outro nome de projeto,
                                 ou exclua o diretório existente.
                                 """)
      (messageCode == 100166) -> ReturnUtil.getValidationResult(100166,
                                 "Erro ao gerar <strong>Código</strong> para project.") 
      (messageCode == 100167) -> ReturnUtil.getValidationResult(100167,
                                 "Erro ao remover <strong>Código</strong> de project.") 
      (messageCode == 100168) -> ReturnUtil.getValidationResult(100168,
                                 "Erro ao atualizar <strong>Código</strong> de project.") 
      (messageCode == 100169) -> ReturnUtil.getValidationResult(100169,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>item menu</strong> vinculado.
                                 """)  
      (messageCode == 100170) -> ReturnUtil.getValidationResult(100170,
                                 """
                                 Já existe outra <strong>configuração</strong> ativa para o evento/atividade
                                 em questão.<br/> 
                                 Não é permitido ter mais de uma configuração ativa para um
                                 mesmo evento/atividade.
                                 """)
      (messageCode == 100171) -> ReturnUtil.getValidationResult(100171,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>configuração evento/atividade</strong> vinculada.
                                 """)
      (messageCode == 100172) -> ReturnUtil.getValidationResult(100172,
                                 "Falha ao criar <strong>Configuração Evento/Atividade</strong>.")
      (messageCode == 100173) -> ReturnUtil.getValidationResult(100173,
                                 "Falha ao alterar <strong>Configuração Evento/Atividade</strong>.") 
      (messageCode == 100174) -> ReturnUtil.getValidationResult(100174,
                                 "<strong>Imagem Cabeçalho</strong> informada não existe.") 
      (messageCode == 100175) -> ReturnUtil.getValidationResult(100175,
                                 "<strong>Imagem Patrocinadores</strong> informada não existe.") 
      (messageCode == 100176) -> ReturnUtil.getValidationResult(100176,
                                 "<strong>Imagem Rodapé</strong> informada não existe.") 
      (messageCode == 100177) -> ReturnUtil.getValidationResult(100177,
                                 "<strong>Imagem Certificado</strong> informada não existe.")  
      (messageCode == 100178) -> ReturnUtil.getValidationResult(100178,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>congresso/conferência</strong> vinculado.
                                 """) 
      (messageCode == 100179) -> ReturnUtil.getValidationResult(100179,
                                 "Falha ao criar <strong>Congresso/Conferência</strong>.")
      (messageCode == 100180) -> ReturnUtil.getValidationResult(100180,
                                 "Falha ao alterar <strong>Congresso/Conferência</strong>.") 
      (messageCode == 100181) -> ReturnUtil.getValidationResult(100181,
                                 "Falha ao criar <strong>Area Temática</strong>.")
      (messageCode == 100182) -> ReturnUtil.getValidationResult(100182,
                                 "Falha ao alterar <strong>Area Temática</strong>.") 
      (messageCode == 100183) -> ReturnUtil.getValidationResult(100183,
                                 "Falha ao criar <strong>Sub Area Temática</strong>.")
      (messageCode == 100184) -> ReturnUtil.getValidationResult(100184,
                                 "Falha ao alterar <strong>Sub Area Temática</strong>.") 
      (messageCode == 100185) -> ReturnUtil.getValidationResult(100185,
                                 "<strong>Area Temática</strong> informada não existe.") 
      (messageCode == 100186) -> ReturnUtil.getValidationResult(100186,
                                 """
                                 <strong>Area Temática</strong> em questão não pode ser excluída,
                                 pois tem <strong>sub area temática</strong> vinculada.
                                 """) 
      (messageCode == 100187) -> ReturnUtil.getValidationResult(100187,
                                 "Falha ao criar <strong>Area Temática Congresso/Conferência</strong>.")
      (messageCode == 100188) -> ReturnUtil.getValidationResult(100188,
                                 "Falha ao alterar <strong>Area Temática Congresso/Conferência</strong>.")
      (messageCode == 100189) -> ReturnUtil.getValidationResult(100189,
                                 "<strong>Congresso/Conferência</strong> informado não existe.")  
      (messageCode == 100190) -> ReturnUtil.getValidationResult(100190,
                                 "<strong>Area Temática</strong> informada não existe.")
      (messageCode == 100191) -> ReturnUtil.getValidationResult(100191,
                                 "<strong>Area Temática</strong> já está adicionada ao Congresso/Conferência.") 
      (messageCode == 100192) -> ReturnUtil.getValidationResult(100192,
                                 """
                                 <strong>Congresso/Conferência</strong> em questão não pode ser excluído,
                                 pois tem <strong>area temática</strong> vinculada.
                                 """) 
      (messageCode == 100193) -> ReturnUtil.getValidationResult(100193,
                                 """
                                 <strong>Area Temática</strong> em questão não pode ser excluída,
                                 pois está vinculada à <strong>congresso/conferência</strong>.
                                 """)  
      (messageCode == 100194) -> ReturnUtil.getValidationResult(100194,
                                 "Falha ao criar <strong>Sub Area Temática Congresso/Conferência</strong>.")
      (messageCode == 100195) -> ReturnUtil.getValidationResult(100195,
                                 "Falha ao alterar <strong>Sub Area Temática Congresso/Conferência</strong>.")
      (messageCode == 100196) -> ReturnUtil.getValidationResult(100196,
                                 "<strong>Sub Area Temática</strong> informada não existe.")
      (messageCode == 100197) -> ReturnUtil.getValidationResult(100197,
                                 "<strong>Area Temática Congresso/Conferência</strong> informada não existe.")
      (messageCode == 100198) -> ReturnUtil.getValidationResult(100198,
                                 "<strong>Sub Area Temática</strong> já está adicionada ao congresso/conferência.")
      (messageCode == 100199) -> ReturnUtil.getValidationResult(100199,
                                 """
                                 <strong>Area Temática</strong> em questão não pode ser excluída,
                                 pois está vinculada à <strong>sub area temática congresso/conferência</strong>.
                                 """) 
      (messageCode == 100200) -> ReturnUtil.getValidationResult(100200,
                                 """
                                 <strong>Congresso/Conferência</strong> em questão não pode ser excluído,
                                 pois tem <strong>sub area temática</strong> vinculada.
                                 """) 
      (messageCode == 100201) -> ReturnUtil.getValidationResult(100201,
                                 """
                                 <strong>Sub Area Temática</strong> em questão não pode ser excluída,
                                 pois está vinculada à <strong>congresso/conferência</strong>.
                                 """)
      (messageCode == 100202) -> ReturnUtil.getValidationResult(100202,
                                 """
                                 <strong>Area Temática Congresso/Conferência</strong> em questão não pode ser excluída,
                                 pois possui <strong>sub area temática congresso/conferência</strong> vinculada.
                                 """) 
      (messageCode == 100203) -> ReturnUtil.getValidationResult(100203,
                                 "Obrigatório informar campo <strong>Tipo Arquivo</strong>.")
      (messageCode == 100204) -> ReturnUtil.getValidationResult(100204,
                                 "Falha ao criar <strong>Configuração Arquivo Congresso/Conferência</strong>.")
      (messageCode == 100205) -> ReturnUtil.getValidationResult(100205,
                                 "Falha ao alterar <strong>Configuração Arquivo Congresso/Conferência</strong>.")
      (messageCode == 100206) -> ReturnUtil.getValidationResult(100206,
                                 """
                                 <strong>Congresso/Conferência</strong> em questão não pode ser excluído,
                                 pois tem <strong>configuração arquivo</strong> vinculada.
                                 """)
      (messageCode == 100207) -> ReturnUtil.getValidationResult(100207,
                                 "Falha ao criar <strong>Participante Evento/Atividade</strong>.")
      (messageCode == 100208) -> ReturnUtil.getValidationResult(100208,
                                 "Falha ao alterar <strong>Participante Evento/Atividade</strong>.")
      (messageCode == 100209) -> ReturnUtil.getValidationResult(100209,
                                 "Participante já registrado como <strong>Inscrito</strong> no Evento/Atividade.")
      (messageCode == 100210) -> ReturnUtil.getValidationResult(100210,
                                 """
                                 Participante já registrado como <strong>Autor/Avaliador de Trabalhos</strong>
                                 no Evento/Atividade.
                                 """)
      (messageCode == 100211) -> ReturnUtil.getValidationResult(100211,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>participantes</strong> registrados.
                                 """) 
      (messageCode == 100212) -> ReturnUtil.getValidationResult(100212,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>configuração evento/atividade</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100213) -> ReturnUtil.getValidationResult(100213,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>configuração evento/atividade</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100214) -> ReturnUtil.getValidationResult(100214,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>sub area temática congresso/conferência</strong> 
                                 em sua responsabilidade.
                                 """)                           
      (messageCode == 100215) -> ReturnUtil.getValidationResult(100215,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>sub area temática congresso/conferência</strong> 
                                 em sua responsabilidade.
                                 """) 
      (messageCode == 100216) -> ReturnUtil.getValidationResult(100216,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>area temática congresso/conferência</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100217) -> ReturnUtil.getValidationResult(100217,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>area temática congresso/conferência</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100218) -> ReturnUtil.getValidationResult(100218,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>configuração arquivo congresso/conferência</strong> 
                                 em sua responsabilidade.
                                 """)                           
      (messageCode == 100219) -> ReturnUtil.getValidationResult(100219,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>configuração arquivo congresso/conferência</strong> 
                                 em sua responsabilidade.
                                 """) 
      (messageCode == 100220) -> ReturnUtil.getValidationResult(100220,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>participante evento/atividade</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100221) -> ReturnUtil.getValidationResult(100221,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>participante evento/atividade</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100222) -> ReturnUtil.getValidationResult(100222,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>congresso/conferência</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100223) -> ReturnUtil.getValidationResult(100223,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>congresso/conferência</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100224) -> ReturnUtil.getValidationResult(100224,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>area temática</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100225) -> ReturnUtil.getValidationResult(100225,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>area temática</strong> em sua responsabilidade.
                                 """) 
      (messageCode == 100226) -> ReturnUtil.getValidationResult(100226,
                                 """
                                 Mudança de categoria não permitida para a <strong>pessoa/usuário</strong> em questão,
                                 pois tem <strong>sub area temática</strong> em sua responsabilidade.
                                 """)                           
      (messageCode == 100227) -> ReturnUtil.getValidationResult(100227,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>sub area temática</strong> em sua responsabilidade.
                                 """)
      (messageCode == 100228) -> ReturnUtil.getValidationResult(100228,
                                 "Não foi possível ativar <strong>acesso ao evento</strong>.")
      (messageCode == 100229) -> ReturnUtil.getValidationResult(100229,
                                 "Falha ao ativar <strong>acesso ao evento</strong>.") 
      (messageCode == 100230) -> ReturnUtil.getValidationResult(100230,
                                 """
                                 Falha ao alterar <strong>senha</strong> de acesso 
                                 como autor e/ou avaliador de trabalhos.
                                 """)
      (messageCode == 100231) -> ReturnUtil.getValidationResult(100231,
                                 """
                                 Falha ao alterar <strong>senha</strong> de acesso 
                                 como participante/inscrito.
                                 """)
      (messageCode == 100232) -> ReturnUtil.getValidationResult(100232,
                                 "Falha ao criar <strong>Integração Banco Itaú</strong>.")
      (messageCode == 100233) -> ReturnUtil.getValidationResult(100233,
                                 "Falha ao alterar <strong>Integração Banco Itaú</strong>.")
      (messageCode == 100234) -> ReturnUtil.getValidationResult(100234,
                                 "<strong>Integração Banco Itaú</strong> informada não existe.")
      (messageCode == 100235) -> ReturnUtil.getValidationResult(100235,
                                 """
                                 <strong>Integração Banco Itaú</strong> em questão não pode ser excluída,
                                 pois está vinculada à <strong>evento/atividade</strong>.
                                 """)
      (messageCode == 100236) -> ReturnUtil.getValidationResult(100236,
                                 "Falha ao criar <strong>Configuração Relatório Zabbix</strong>.")
      (messageCode == 100237) -> ReturnUtil.getValidationResult(100237,
                                 "Falha ao alterar <strong>Configuração Relatório Zabbix</strong>.")
      (messageCode == 100238) -> ReturnUtil.getValidationResult(100238,
                                 "Falha ao criar <strong>Submissão De Trabalho</strong>.")
      (messageCode == 100239) -> ReturnUtil.getValidationResult(100239,
                                 "Falha ao alterar <strong>Submissão De Trabalho</strong>.")
      (messageCode == 100240) -> ReturnUtil.getValidationResult(100240,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>submissão de trabalho</strong> registrada.
                                 """) 
      (messageCode == 100241) -> ReturnUtil.getValidationResult(100241,
                                 """
                                 <strong>Participante Evento/Atividade</strong> em questão, 
                                 não pode ser excluído pois é autor de <strong>submissão de trabalho</strong>.
                                 """)                           
      (messageCode == 100242) -> ReturnUtil.getValidationResult(100242,
                                 """
                                 <strong>Pessoa/Usuário</strong> em questão não pode ser excluída,
                                 pois tem <strong>submissão de trabalho</strong> em sua responsabilidade.
                                 """)
      (messageCode == 100243) -> ReturnUtil.getValidationResult(100243,
                                 """
                                 <strong>Congresso/Conferência</strong> em questão não pode ser excluído,
                                 pois tem <strong>submissão de trabalho</strong> vinculada.
                                 """)
      (messageCode == 100244) -> ReturnUtil.getValidationResult(100244,
                                 """
                                 <strong>Area Temática Congresso/Conferência</strong> em questão não pode ser excluída,
                                 pois tem <strong>submissão de trabalho</strong> vinculada.
                                 """)
      (messageCode == 100245) -> ReturnUtil.getValidationResult(100245,
                                 "<strong>Sub Area Temática Congresso/Conferência</strong> informada não existe.") 
      (messageCode == 100246) -> ReturnUtil.getValidationResult(100246,
                                 """
                                 <strong>Sub Area Temática Congresso/Conferência</strong> 
                                 em questão não pode ser excluída,
                                 pois tem <strong>submissão de trabalho</strong> vinculada.
                                 """)   
      (messageCode == 100247) -> ReturnUtil.getValidationResult(100247,
                                 "Falha ao criar <strong>Autor Submissão Trabalho</strong>.")
      (messageCode == 100248) -> ReturnUtil.getValidationResult(100248,
                                 "Falha ao alterar <strong>Autor Submissão Trabalho</strong>.") 
      (messageCode == 100249) -> ReturnUtil.getValidationResult(100249,
                                 "<strong>Submissão Trabalho</strong> informada não existe.")
      (messageCode == 100250) -> ReturnUtil.getValidationResult(100250,
                                 """
                                 <strong>Participante</strong> informado não existe,
                                 ou não efetou registro no evento como "autor"/"autor e avaliador" de trabalhos.
                                 """) 
      (messageCode == 100251) -> ReturnUtil.getValidationResult(100251,
                                 """
                                 <strong>Participante Evento/Atividade</strong> informado não pode ser
                                 excluído pois é autor em <strong>submissão de trabalho</strong>.
                                 """) 
      (messageCode == 100252) -> ReturnUtil.getValidationResult(100252,
                                 """
                                 Já existe um autor com a <strong>ordem apresentação</strong> informada.
                                 """)  
      (messageCode == 100253) -> ReturnUtil.getValidationResult(100253,
                                 """
                                 <strong>Participante</strong> já adicionado à lista de autores.
                                 """)   
      (messageCode == 100254) -> ReturnUtil.getValidationResult(100254,
                                 """
                                 Já existe outra <strong>configuração AWS S3</strong> ativa para o evento/atividade. 
                                 Não é permitido ter mais de uma configuração AWS S3 ativa ao mesmo tempo.
                                 """) 
      (messageCode == 100255) -> ReturnUtil.getValidationResult(100255,
                                 """
                                 É necessário haver uma configuração AWS S3 ativa para 
                                 permitir upload de arquivos para o evento/atividade em questão.
                                 """)
      (messageCode == 100256) -> ReturnUtil.getValidationResult(100256,
                                 "Falha ao realizar upload do <strong>arquivo</strong>.")
      (messageCode == 100257) -> ReturnUtil.getValidationResult(100257,
                                 "Falha ao realizar upload do <strong>arquivo</strong>.")  
      (messageCode == 100258) -> ReturnUtil.getValidationResult(100258,
                                 "Falha ao realizar upload do <strong>arquivo</strong>.")
      (messageCode == 100259) -> ReturnUtil.getValidationResult(100259,
                                 """
                                 <strong>Configuração Arquivo Congresso/Conferência</strong> 
                                 informada não existe.
                                 """)    
      (messageCode == 100260) -> ReturnUtil.getValidationResult(100260,
                                 """
                                 <strong>Configuração Arquivo Congresso/Conferência</strong> 
                                 em questão não pode ser excluído pois tem 
                                 <strong>submissão trabalho</strong> vinculada.
                                 """) 
      (messageCode == 100261) -> ReturnUtil.getValidationResult(100261,
                                 """
                                 Autor responsável pela submissão já atingiu o limite de submissões
                                 para o <strong>Congresso/Conferência</strong> 
                                 em questão. Não é possível adicionar a submissão.
                                 """) 
      (messageCode == 100262) -> ReturnUtil.getValidationResult(100262,
                                 """
                                 Autor já atingiu o limite de submissões
                                 para o <strong>Congresso/Conferência</strong> 
                                 em questão. Não é possível adicionar autor.
                                 """)  
      (messageCode == 100263) -> ReturnUtil.getValidationResult(100263,
                                 "Falha ao criar <strong>Validação Controle Acesso</strong>.")
      (messageCode == 100264) -> ReturnUtil.getValidationResult(100264,
                                 "Falha ao alterar <strong>Validação Controle Acesso</strong>.")  
      (messageCode == 100265) -> ReturnUtil.getValidationResult(100265,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>validação controle acesso</strong> vinculada.
                                 """) 
      (messageCode == 100266) -> ReturnUtil.getValidationResult(100266,
                                 """
                                 <strong>Menu</strong> em questão não pode ser excluído,
                                 pois tem <strong>validação controle acesso</strong> vinculada.
                                 """)
      (messageCode == 100267) -> ReturnUtil.getValidationResult(100267,
                                 """
                                 <strong>Item Menu</strong> em questão não pode ser excluído,
                                 pois tem <strong>validação controle acesso</strong> vinculada.
                                 """) 
      (messageCode == 100268) -> ReturnUtil.getValidationResult(100268,
                                 """
                                 <strong>Participante Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>validação controle acesso</strong> vinculada.
                                 """)  
      (messageCode == 100269) -> ReturnUtil.getValidationResult(100269,
                                 """
                                 É necessário já ter se registrado como <strong>Participante</strong> 
                                 no site de origem do Evento/Atividade.
                                 """) 
      (messageCode == 100270) -> ReturnUtil.getValidationResult(100270,
                                 """
                                 Limite de utilização do recurso foi extrapolado.
                                 Aguarde um minuto e tente novamente.
                                 """) 
      (messageCode == 100271) -> ReturnUtil.getValidationResult(100271,
                                 """
                                 Falha ao tentar enviar mensagem.
                                 Por favor aguarde um momento e tente novamente.
                                 """) 
      (messageCode == 100272) -> ReturnUtil.getValidationResult(100272,
                                 "Falha ao gerar <strong>Boleto Itaú</strong>.")
      (messageCode == 100273) -> ReturnUtil.getValidationResult(100273,
                                 "Falha ao alterar <strong>Boleto Itaú</strong>.")  
      (messageCode == 100274) -> ReturnUtil.getValidationResult(100274,
                                 """
                                 <strong>Participante</strong> informado não existe.
                                 """) 
      (messageCode == 100275) -> ReturnUtil.getValidationResult(100275,
                                 """
                                 <strong>Número de Pedido</strong> informado já existe,
                                 para a respectiva configuração de boleto Itaú.
                                 """) 
      (messageCode == 100276) -> ReturnUtil.getValidationResult(100276,
                                 """
                                 <strong>Participante Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>boleto itaú</strong> vinculado.
                                 """) 
      (messageCode == 100277) -> ReturnUtil.getValidationResult(100277,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>boleto itaú</strong> vinculado.
                                 """) 
      (messageCode == 100278) -> ReturnUtil.getValidationResult(100278,
                                 """
                                 <strong>Integração Banco Itaú</strong> em questão não pode ser excluída,
                                 pois está vinculada à <strong>boleto itaú</strong>.
                                 """)
      (messageCode == 100279) -> ReturnUtil.getValidationResult(100279,
                                 "Falha ao criar <strong>Categoria Inscrição</strong>.")
      (messageCode == 100280) -> ReturnUtil.getValidationResult(100280,
                                 "Falha ao alterar <strong>Categoria Inscrição</strong>.") 
      (messageCode == 100281) -> ReturnUtil.getValidationResult(100281,
                                 """
                                 <strong>Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois tem <strong>categoria inscrição</strong> vinculada.
                                 """)  
      (messageCode == 100282) -> ReturnUtil.getValidationResult(100282,
                                 "<strong>Categoria Inscrição</strong> informada não existe.")
      (messageCode == 100283) -> ReturnUtil.getValidationResult(100283,
                                 """
                                 <strong>Categoria Inscrição</strong> em questão não pode ser excluída,
                                 pois está vinculada à <strong>boleto itaú</strong>.
                                 """)
      (messageCode == 100284) -> ReturnUtil.getValidationResult(100284,
                                 "Falha ao criar <strong>Avaliador Submissão</strong>.")
      (messageCode == 100285) -> ReturnUtil.getValidationResult(100285,
                                 "Falha ao alterar <strong>Avaliador Submissão</strong>.") 
      (messageCode == 100286) -> ReturnUtil.getValidationResult(100286,
                                 "<strong>Avaliador Submissão</strong> já está adicionado.") 
      (messageCode == 100287) -> ReturnUtil.getValidationResult(100287,
                                 """
                                 <strong>Participante Evento/Atividade</strong> em questão não pode ser excluído,
                                 pois está definido como <strong>avaliador submissão</strong>.
                                 """)
      (messageCode == 100288) -> ReturnUtil.getValidationResult(100288,
                                 """
                                 <strong>Submissão Trabalho</strong> em questão não pode ser excluída,
                                 pois possui <strong>avaliador</strong> vinculado.
                                 """)
      (messageCode == 100289) -> ReturnUtil.getValidationResult(100289,
                                 "Falha ao criar <strong>Ponto Avaliação Trabalho</strong>.")
      (messageCode == 100290) -> ReturnUtil.getValidationResult(100290,
                                 "Falha ao alterar <strong>Ponto Avaliação Trabalho</strong>.")
      (messageCode == 100291) -> ReturnUtil.getValidationResult(100291,
                                 """
                                 <strong>Congresso/Conferência</strong> em questão não pode ser excluído,
                                 pois possui <strong>ponto avaliação trabalho</strong>.
                                 """)  
      (messageCode == 100292) -> ReturnUtil.getValidationResult(100292,
                                 "Falha ao criar <strong>Avaliação Submissão Trabalho</strong>.")
      (messageCode == 100293) -> ReturnUtil.getValidationResult(100293,
                                 "Falha ao alterar <strong>Avaliação Submissão Trabalho</strong>.") 
      (messageCode == 100294) -> ReturnUtil.getValidationResult(100294,
                                 "<strong>Avaliador Submissão</strong> informado não existe.") 
      (messageCode == 100295) -> ReturnUtil.getValidationResult(100295,
                                 "<strong>Avaliador Submissão</strong> já tem uma avaliação para o trabalho em questão.") 
      (messageCode == 100296) -> ReturnUtil.getValidationResult(100296,
                                 """
                                 <strong>Congresso/Conferência</strong> em questão não pode ser excluído,
                                 pois possui <strong>avaliação trabalho</strong>.
                                 """)
      (messageCode == 100297) -> ReturnUtil.getValidationResult(100297,
                                 """
                                 <strong>Submissão Trabalho</strong> em questão não pode ser excluída,
                                 pois possui <strong>avaliação trabalho</strong> vinculada.
                                 """)
      (messageCode == 100298) -> ReturnUtil.getValidationResult(100298,
                                 """
                                 <strong>Avaliador Submissão</strong> em questão não pode ser excluído,
                                 pois possui <strong>avaliação trabalho</strong> vinculada.
                                 """)
      (messageCode == 100299) -> ReturnUtil.getValidationResult(100299,
                                 "<strong>Ponto Avaliação Trabalho</strong> informado não existe.")
      (messageCode == 100300) -> ReturnUtil.getValidationResult(100300,
                                 "<strong>Avaliação Submissão Trabalho</strong> informada não existe.")
      (messageCode == 100301) -> ReturnUtil.getValidationResult(100301,
                                 "Falha ao criar <strong>Ponto Avaliação Submissão</strong>.")
      (messageCode == 100302) -> ReturnUtil.getValidationResult(100302,
                                 "Falha ao alterar <strong>Ponto Avaliação Submissão</strong>.") 
      
      (messageCode == 100303) -> ReturnUtil.getValidationResult(100303,
                                 "Falha ao criar <strong>Categoria Produto</strong>.")
      (messageCode == 100304) -> ReturnUtil.getValidationResult(100304,
                                 "Falha ao alterar <strong>Categoria Produto</strong>.")
      (messageCode == 100305) -> ReturnUtil.getValidationResult(100305,
                                 "Falha ao criar <strong>Produto</strong>.")
      (messageCode == 100306) -> ReturnUtil.getValidationResult(100306,
                                 "Falha ao alterar <strong>Produto</strong>.")
      (messageCode == 100307) -> ReturnUtil.getValidationResult(100307,
                                 "<strong>Imagem</strong> informada não existe.") 
      (messageCode == 100308) -> ReturnUtil.getValidationResult(100308,
                                 """
                                 <strong>Imagem</strong> em questão não pode ser excluída pois
                                 está vinculada à produto(s).
                                 """) 
      (messageCode == 100309) -> ReturnUtil.getValidationResult(100309,
                                 "<strong>Categoria Produto</strong> informada não existe.")
      (messageCode == 100310) -> ReturnUtil.getValidationResult(100310,
                                 """
                                 <strong>Categoria Produto</strong> em questão não pode ser excluída 
                                 pois está vinculada à produto(s).
                                 """)
      (messageCode == 100311) -> ReturnUtil.getValidationResult(100311,
                                 "Falha ao criar <strong>Custo Fixo</strong>.")
      (messageCode == 100312) -> ReturnUtil.getValidationResult(100312,
                                 "Falha ao alterar <strong>Custo Fixo</strong>.")
      true -> systemMessage(0)
    end
  end

end









