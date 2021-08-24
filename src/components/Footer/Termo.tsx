import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: 0,
        padding: 0,
      },
    },
    title: {
      fontSize: '100%',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'montserrat',
    },
    link: {
      color: 'rgb(255, 255, 255)',
      fontFamily: "Montserrat",
    },
    subTitle: {
      fontSize: '100%',
      textAlign: 'center',
      fontFamily: 'montserratBold',
      fontWeight: 'bold',
    },
    text: {
      fontSize: '80%',
      fontFamily: "Montserrat",
      fontWeight: 'bold',
    },
    item: {
      fontSize: '80%',
      fontFamily: 'montserratBold',
      fontWeight: 'bold',
    },
    bold:{
      fontFamily: 'montserratBold',
      fontWeight: 'bold',
    }

  }),
);

const Termo: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} > TERMOS DE USO E POLÍTICA DE PRIVACIDADE DA LIKKN </Typography>
      <Typography className={classes.subTitle} paragraph={true}> Última revisão: julho de 2020 </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}> Olá. Seja bem vindo aos Termos de Uso e Política de Privacidade da Likkn! Estes documentos determinam as
        regras da nossa Plataforma, bem como as regras para a utilização dos serviços disponibilizados pela Likkn,
        plataforma virtual disponível através da URL https://likkn.com/pt-br.<br /><br />
        A Likkn é uma empresa criada para conectar pessoas através da tecnologia. A Plataforma Likkn visa integrar e
        possibilitar a aproximação de um usuário (“Usuário”) com o outro, bem como do Usuário com grupos, empresas,
        organizações e outras entidades do seu interesse, por meio da criação de comunidades (“Comunidades”) de
        diversos tipos e segmentos para a divulgação de produtos e serviços, e a consequente compra, venda, locação,
        empréstimo e/ou doação de quaisquer itens, produtos e serviços, permitindo a expansão dos negócios do Usuário
        através de um marketplace.<br /><br />
        Antes de se cadastrar e utilizar a Plataforma Likkn, é necessário que o Usuário leia, entenda e concorde com estes
        Termos de Uso e Política de Privacidade. Caso tenha qualquer dúvida, estamos à disposição para ouvi-lo, entre em
        contato conosco através do e-mail help@likkn.com. Sua opinião é muito importante para a Likkn.<br /><br />
        Ao acessar ou utilizar a Plataforma, o Usuário concorda com estes Termos de Uso e Política de Privacidade. Caso
        o Usuário não concorde com o teor de qualquer uma das disposições deste documento, solicitamos que não utilize
        a Plataforma e/ou os serviços oferecidos.<br /><br />
        Lembramos que os Termos de Uso e a Política de Privacidade, assim como os conteúdos e funcionalidades da
        Plataforma, poderão ser atualizados a qualquer momento. A Likkn dará ciência aos Usuários dessas atualizações
        mediante a publicação da versão atualizada dos Termos de Uso da Comunidade, com a data da “Última
        atualização”.<b className={classes.bold}> O uso contínuo da Plataforma pelo Usuário após as alterações destes Termos de Uso e
          Política de Privacidade, implica na concordância automática com as alterações.</b>
      </Typography>
      <br />
      <Typography className={classes.item} > 1. Cadastro </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Os serviços (“Serviços”) da Plataforma estão disponíveis para pessoas físicas regularmente inscritas no Cadastro
        de Pessoas Físicas e que tenham capacidade legal para contratá-los. Não poderão utilizar a Plataforma pessoas que
        não tenham capacidade legal, especialmente os menores de idade.<br /><br />
        O cadastro na Plataforma é gratuito. Para se cadastrar, o Usuário deverá criar uma conta pessoal (“Conta”)
        informando seu nome completo, e-mail para login e senha. Caso o Administrador da Comunidade entenda que há
        a eventual necessidade de fornecimento de novos dados à Plataforma imprescindíveis para o cadastro, o Usuário
        será informado sobre os dados adicionais solicitados, ficando ao seu exclusivo critério a decisão de fornecê-los ou
        não para utilização dos Serviços disponibilizados pela Plataforma.<br /><br />
        O Usuário confirma e garante a veracidade e precisão das informações fornecidas à Likkn, tendo em vista que é o
        único responsável, civil e criminalmente, pela veracidade das informações e eventuais danos causados à Likkn, e
        compromete-se a manter suas informações cadastrais atualizadas. A Likkn se reserva ao direito de remover da
        Plataforma qualquer Usuário que não observe os Termos de Uso e Política de Privacidade ou que tenha, durante
        a fase de cadastro ou de uso da Plataforma, adulterado, falsificado ou omitido dados ou informações indispensáveis.<br /><br />
        Além disso, o seu cadastro é pessoal e intransferível, logo o Usuário é integralmente responsável por manter a
        confidencialidade de suas informações pessoais, do seu login e senha, e por todas as atividades que ocorrem em
        sua conta, isentando a Likkn de quaisquer prejuízos decorrentes da utilização indevida por terceiros. Caso o Usuário
        tenha notícias ou desconfie de qualquer uso não autorizado de sua conta, deverá notificar imediatamente a Likkn,
        que bloqueará seu login e fornecerá outra senha para utilização da Plataforma.<br /><br />
        Para a segurança do Usuário, a Likkn não solicita senha, dados de cartão de crédito ou dados bancários de seus
        Usuários por e-mail ou qualquer outro canal de atendimento. Caso o Usuário receba qualquer comunicação nesse
        sentido, deverá desconsiderá-la e não a responder e, se possível, deverá encaminhar o seu relato para
        help@likkn.com, para que a Likkn possa tomar as devidas providenciais legais cabíveis.<br /><br />
      </Typography>
      <Typography className={classes.item} > 2. Serviços </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Likkn tem o objetivo de proporcionar ao Usuário o poder de criar Comunidades e expandir os seus negócios
        aproximando-o de outros Usuários, grupos, empresas, organizações e outras entidades do interesse do Usuário.
        Para tanto, a Likkn disponibiliza ao Usuário espaço para oferecimento de serviços e produtos por meio de páginas
        customizadas para cada Comunidade mediante um subdomínio criado pela Likkn.<br /><br />
        A utilização da Plataforma Likkn pelos Usuários membros da Comunidade é livre e gratuita. O Usuário poderá
        participar de diversos tipos de Comunidades inseridas na Plataforma Likkn, podendo participar como Usuário
        Comprador, Usuário Vendedor e/ou Usuário Fornecedor, sempre respeitando os Termos de Uso e Política de
        Privacidade da Plataforma Likkn. Cada Comunidade será admistrada por um Usuário denominado Administrador,
        sendo certo que este não possui quaisquer vínculos societários e/ou trabalhistas com a Likkn.<br /><br />
        Para participar de uma Comunidade específica, o Usuário deverá ser aprovado por um Administrador para que
        possa divulgar através de anúncios os seus produtos e serviços na Comunidade escolhida. Nesse sentido, a Likkn
        não se responsabiliza pela aprovação dos anúncios e/ou do Usuário tendo em vista que as regras de cada
        Comunidade serão definidas pelo Administrador, que observará os limites destes Termos de Uso e Política de
        Privacidade, responsabilizando-se pela garantia do cumprimento destas regras, bem como pela aprovação ou
        expulsão de Usuários que não as observarem.<br /><br />
        A Likkn reguarda-se do direito de predeterminar quais produtos e serviços poderão ser anunciados na Plataforma.
        A Likkn destaca que utilização da Plataforma Likkn pelos Usuários membros da Comunidade é livre e gratuita, ou
        seja, não cobraremos nada do Usuário para que este possa comprar ou vender produtos e serviços por meio da
        nossa Plataforma. A remuneração da Likkn será através de anúncios pagos/patrocinados nas Comunidades, que
        serão adicionados pela Likkn sem a necessidade de aviso prévio ao Administrador e demais Usuários. Para que
        participantes externos anunciem seus produtos no marketplace da Comunidade, a Likkn cobrará um valor
        previamente acordado com estes anunciantes.<br /><br />
        Nesse sentido, os Administradores da Comunidade não poderão solicitar nenhum tipo de remuneração em razão
        dos serviços ou anúncios de nenhum Usuário, membro ou não da Comunidade. Qualquer tipo de remuneração
        recebida pelo Administrador da Comunidade que esteja em desacordo com o que foi predeterminado pela Likkn
        será considerada infração aos presentes Termos de Uso, e nesse caso, a Likkn poderá optar pela expulsão do
        Administrador.<br /><br />
      </Typography>

      <Typography className={classes.item} > 3. Obrigações e Restrições do Usuário </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Utilização Responsável. O Usuário usará a Plataforma Likkn e terá acessos às diversas Comunidades, e deverá usálas somente de acordo com suas finalidades. O conteúdo disponibilizado deverá estar relacionado com o intuíto
        da Comunidade escolhida, respeitando os direitos de propriedade intelectual e principalmente sem realizar
        discriminações de quaisquer tipos, incluindo, mas não se limitando a, raça e etnia, religião, sexo/gênero, idade,
        deficiência, condições de emprego e orientação sexual. Além disso, é expressamente vedados ao Usuário divulgar
        e/ou solicitar informações confidenciais e/ou dados sensíveis de terceiros.<br /><br />
        O Usuário não poderá divulgar informações abusivas, difamatórias, enganosas, falsas, mentirosas ou fraudulentas,
        sob pena de serem excluídos da Plataforma. Sendo assim, a Likkn se reserva o direito de suspender e/ou excluir o
        acesso do Usuário que não respeitar tais diretrizes, e nos casos necessários, tomar as medidas judiciais cabíveis.
        Também é expressamente vedada ao Usuário a venda de produtos ilícitos ou que não possuam todos os registros
        e autorizações necessários. Assim, para a venda de um serviço ou produto, o Usuário deverá estar autorizado a
        realizar a venda e deverá possuir todas as licenças necessárias para tanto, sendo certo que o Usuário é inteiramente
        responsável pelas ações que realizar na Plataforma Likkn.<br /><br />
        Sem prejuízo das demais obrigações previstas nestes Termos de Uso e Política de Privacidade, o Usuário
        compromete-se a:<br /><br />
        ●   Utilizar a Plataforma nos limites deste Termos de Uso e Política de Privacidade;<br />
        ●   Efetuar o seu cadastro na Plataforma, responsabilizando-se pela correção, veracidade e exatidão dos dados
        informados, assim como pela guarda de seu login e senha de acesso;<br />
        ●   Manter o ambiente de seu dispositivo móvel ou computador seguro, com uso de ferramentas disponíveis
        como antivírus e firewall atualizadas, de modo a contribuir na prevenção de riscos eletrônicos;<br />
        ●   Não difamar, agredir, lesar ou injuriar a Likkn;<br />
        ●   Não praticar quaisquer atos ilícitos e/ou atos que violem a legislação vigente, nacional ou internacional;<br />
        ●   Indenizar a Likkn em relação a ações judiciais, perdas, despesas e/ou obrigações (incluindo os honorários
        advocatícios) decorrentes do uso indevido da Plataforma;<br />
        ●   Não praticar atos contrários à moral e aos bons costumes;<br />
        ●   Não assumir a personalidade ou identidade de outra pessoa física;<br />
        ●   Não praticar quaisquer atos que direta ou indiretamente, no todo ou em parte, possam causar prejuízos à
        Likkn, a outros Usuários ou a quaisquer terceiros. <br /><br />
        Lembramos que o Usuário também será responsável pela conduta de terceiros que, utilizando-se de seu login e
        senha, violarem estes Termos de Uso e Política de Privacidade.<br /><br />
      </Typography>

      <Typography className={classes.item} > 4. Obrigações da Likkn </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Likkn compromete-se a:<br /><br />
        • Disponibilizar e realizar a manutenção da Plataforma;<br />
        • Disponibilizar canal de atendimento via e-mail help@likkn.com para solucionar, sempre que possível,<br />
        qualquer dúvida que o Usuário tenha, bem como para receber comentários, sugestões ou reclamações sobre os
        serviços oferecidos pela Plataforma;
        • Garantir que todos os Usuários cadastrados na Plataforma tenham concordado com todas as condições,
        direitos e obrigações estabelecidos pela Likkn nestes Termos de Uso e na Política de Privacidade;<br />
        • Desativar a conta de qualquer Usuário que não respeite e abuse destes Termos de Uso e da Política de
        Privacidade;<br />
        • Implementar todas as medidas técnicas necessárias para proteger as informações confidenciais dos
        Usuários.<br />
        • Usar seus melhores esforços para monitorar as atividades dos Usuários, a fim de suspender o acesso do
        Usuário que não esteja seguindo as disposições desses Termos de Uso e Política de Privacidade.<br /><br />
        A Likkn envidará esforços para manter a Plataforma sempre disponível, mas não será responsável por interrupções
        temporárias que possam vir a ocorrer, por quaisquer que sejam as razões. O acesso à Plataforma pode ser
        temporariamente suspenso, sem notificação, em caso de falha no sistema, manutenção, reparo ou por qualquer
        outra razão plausível. <br /><br />
      </Typography>


      <Typography className={classes.item} > 5. Cancelamento, Troca e Devolução </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Cada Usuário Vendedor e Fornecedor tem sua própria política de cancelamento, troca e devolução, que será
        disponibilizada juntamente com a oferta de produtos e/ou serviços ofertados por meio da Plataforma e possui
        responsabilidade exclusiva em relação ao cancelamento, troca, devolução de produtos por meio da Plataforma
        concordando, ademais, em isentar a Likkn, de forma irretratável e irrevogável, de quaisquer responsabilidades,
        perdas e danos neste tocante<br /><br />

      </Typography>

      <Typography className={classes.item} > 6. Limitação de Responsabilidade </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Likkn, seus sócios, funcionários, representantes, subsidiários, empresas afiliadas, distribuidores, parceiros,
        licenciados, agentes ou outras pessoas envolvidas na criação, patrocínio, promoção ou criação da Plataforma
        e do seu conteúdo não poderão ser responsabilizados por perdas e danos do Usuário nas seguintes situações:<br /><br />
        ● Por qualquer ato ou omissão, dano (direto, indireto, consequentes ou puníveis), perdas ou custos
        suportados, incorridos ou pagos pelo Usuário, em função de seu acesso a Plataforma;<br />
        ● Quando não houver descumprimento comprovado de dever legal de cuidado em relação aos dados do
        Usuário fornecidos à Plataforma;<br />
        ● Por falhas, impossibilidades técnicas ou indisponibilidades do sistema.<br /><br />
      </Typography>

      <Typography className={classes.item} > 7. Confidencialidade </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Likkn se compromete em manter em mais absoluto sigilo informações sensíveis disponibilizadas pelos Usuários
        em razão da utilização da Plataforma, nos termos da Política de Privacidade. <br /><br />
      </Typography>
      <Typography className={classes.item} > 8. Propriedade Intelectual </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        O Usuário é e permanecerá proprietário dos direitos de propriedade intelectual (como direitos autorais ou marcas
        registradas) sobre o conteúdo que cria e compartilha na Likkn.<br /><br />
        Contudo, para fornecer nossos serviços, o Usuário concederá à Likkn algumas permissões legais (“Licença”) para
        utilizar esse conteúdo com o objetivo específico de fornecimento e melhoria dos nossos serviços. Ao compartilhar,
        publicar ou carregar conteúdo protegido por direitos de propriedade intelectual em nossa Plataforma e nas
        Comunidades, o Usuário nos concede uma Licença não exclusiva, transferível, sublicenciável, isenta de royalties e
        válida mundialmente para hospedar, usar, distribuir, modificar, veicular, copiar, executar publicamente ou exibir,
        traduzir e criar trabalhos derivados de seu conteúdo (de modo consistente com suas configurações de privacidade
        e da Plataforma).<br /><br />
        Nesse sentido, ao compartilhar um conteúdo em nossa Plataforma, o Usuário nos dará permissão para armazenálo, copiá-lo e compartilhá-lo com outras pessoas, nos limites da nossa Política de Privacidade, como por exemplo,
        os provedores de serviços que fornecem suporte para nossos serviços. Essa licença será encerrada quando o
        conteúdo for excluído pelo Usuário, sendo que nesses casos o conteúdo deixará de estar visível para outros
        Usuários.<br /><br />
        A Likkn destaca ao Usuário que após a exclusão do conteúdo, este poderá continuar a existir em outros locais nos
        nossos sistemas quando:<br /><br />
        <b className={classes.bold}>(i)</b> A exclusão imediata não for possível devido a limitações técnicas (neste caso, seu conteúdo será
        excluído em, no máximo, 90 dias de quando o Usuário o excluiu);<br />
        <b className={classes.bold}>(ii)</b> O conteúdo tiver sido usado por outros Usuários de acordo com essa licença, e estes não o excluíram
        (neste caso, a licença continuará a ser aplicável até que aquele conteúdo seja excluído); ou<br />
        <b className={classes.bold}>(iii)</b> A exclusão imediata restrinja nossa capacidade de investigar ou identificar atividade ilegal ou violações
        aos presentes Termos de Uso e Política de Privacidades, ou ainda, impeça-nos de cumprir uma
        obrigação legal, como a preservação de provas, bem como para atender a uma solicitação de uma
        autoridade judicial ou administrativa, de aplicação da lei ou de uma agência governamental;<br /><br />
        Nestes casos, o conteúdo será mantido apenas pelo tempo necessário para os fins para os quais foi retido (a duração
        exata variará caso a caso), conforme detalhado em nossa Política de Privacidade abaixo. Em cada caso acima, a
        Licença será mantida até que o conteúdo tenha sido totalmente excluído.<br /><br />
        O website, código-fonte, nomes de domínio, patentes, layout, software, know-how, segredos comerciais e de
        negócios, e demais sinais distintivos, da Plataforma, ou que venham a ser criados, desenvolvidos ou modificados
        no âmbito da Plataforma, estão sujeitos aos direitos de propriedade intelectual, pertencendo de forma exclusiva à
        Likkn.<br /><br />
        Nenhum Usuário poderá modificar, distribuir, vender, alugar, publicar ou utilizar indevidamente o website ou a
        Plataforma, bem como quaisquer outras obras de propriedade intelectual e/ou industrial, registrados ou não,
        pertencentes à Likkn, sob pena de aplicação das medidas legais cabíveis.<br /><br />
        Assim, exceto conforme expressamente permitido nestes Termos de Uso e Política de Privacidade, e sob pena de
        adoção das medidas legais cabíveis, o Usuário não pode: (i) copiar, modificar ou criar trabalhos derivados da
        Plataforma da Likkn; (ii) distribuir, transferir, sublicenciar, arrendar, emprestar ou alugar a Plataforma da Likkn
        para terceiros; (iii) fazer engenharia reversa, descompilar ou desmontar, modificar as características, ampliar,
        mesclar o website ou a Plataforma da Likkn ou incorporá-los em quaisquer outros programas ou sistemas; (iv)
        copiar, fazer web scraping, conectar por link direto ou indireto (hyper/deep link), publicar, promover,
        comercializar, integrar, utilizar, combinar ou usar o conteúdo (incluindo quaisquer traduções e comentários dos
        Usuários) ou a marca Likkn sem autorização por escrito para tal; (v) reproduzir, total ou parcialmente, de forma
        permanente ou temporária, à título gratuito ou oneroso, sob quaisquer modalidades, a Plataforma da Likkn, sob
        pena de aplicação das medidas legais cabíveis.<br /><br />
      </Typography>

      <Typography className={classes.item} > 9. Vigência e Rescisão  </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Estes Termos de Uso e Política de Privacidade vigoram por prazo indeterminado, e poderão ser rescindidos a
        qualquer momento e por qualquer das partes, sem ônus, sem necessidade de justificativa e/ou de aviso prévio. Os
        Usuários que desejarem cancelar seu cadastro na Plataforma deverão encaminhar e-mail para help@likkn.com.<br /><br />
        A Likkn poderá, cancelar ou suspender a conta do Usuário, a qualquer momento e por qualquer motivo, sem aviso
        prévio especialmente nos casos de:<br /><br />
        ● Violação dos Termos de uso ou da Política de Privacidade;<br />
        ● Violação de leis, normas, regulamentos ou direitos de terceiros aplicáveis e em vigor;<br />
        ● Forem detectados indícios de fraude ou uso indevido da Plataforma;<br />
        ● Suspeitarmos de qualquer outra atividade ilegal associada à sua Conta;<br /><br />
      </Typography>

      <Typography className={classes.item} > 10. Armazenamento de Dados </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Likkn é obrigada a agir em conformidade com a legislação vigente, em especial a Lei nº 12.965/ 2014 (Marco
        Civil da Internet), e Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais) e seus decretos, na coleta,
        armazenamento, compartilhamento, transmissão, disponibilização e tratamento de dados pessoais do Usuário.
        Especificamente quanto ao tratamento de dados pessoais do Usuário, verifique abaixo a Política de Privacidade da
        Likkn.<br /><br />
      </Typography>

      <Typography className={classes.item} > 11. Comunicação entre as Partes </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Caso o Usuário tenha qualquer dúvida, comentário, sugestão ou reclamação sobre serviços disponibilizados pela
        Plataforma, poderá entrar em contato conosco por meio de nossos canais de atendimento da Plataforma:
        help@likkn.com ou telefone disponibilizado na Plataforma.<br /><br />
        Para facilitar nosso atendimento, é importante que os Usuários nos forneçam as informações necessárias para
        identificarmos o seu login da Plataforma.<br /><br />
      </Typography>

      <Typography className={classes.item} > 12. Política de Privacidade </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Likkn coleta as Informações pessoais fornecidas voluntariamente pelos Usuários no momento do cadastro,
        conforme disposto na item 1 acima e durante a utilização dos serviços oferecidos pela Plataforma, observando os
        princípios da boa-fé, finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência,
        segurança, prevenção e não discriminação.<br /><br />
        Ao acessar e navegar na Plataforma, a Likkn também poderá coletar informações disponibilizadas pelos
        navegadores de internet, tais como, informações sobre o dispositivo utilizado (móvel ou computador), endereços
        de IP, páginas visitadas, data e hora da conexão, dentre outras, conforme detalhado abaixo.<br /><br />
        O tratamento de dados pessoais dos Usuários é realizado pela Likkn para que esta possa aprimorar e prestar os
        serviços disponíveis em sua Plataforma, para identificar devidamente os Usuários, bem como para o cumprimento
        de obrigações legais e regulatórias, e ainda, para o exercício regular de seus direitos.<br /><br />
        Antes de acessar e utilizar os serviços oferecidos pela Likkn, o Usuário declara ser maior de 18 (dezoito) anos, e
        que fez a leitura completa e concorda integralmente com todas disposições da presente Política de Privacidade,
        concedendo expressamente seu consentimento para o tratamento dos seus dados pessoais pela Likkn, para cada
        uma das finalidades abaixo descritas e nos limites previstos neste instrumento e pela legislação aplicável, o qual
        poderá ser revogado a qualquer momento pelo Usuário através dos canais de comunicação da Likkn. Caso o
        Usuário não concorde com a presente Política de Privacidade, deverá abster-se de utilizar os serviços oferecidos
        pela Plataforma da Likkn.<br /><br />
        A Likkn coleta os seguintes tipos de informações do Usuário:<br /><br />
      </Typography>

      <Typography className={classes.item} > 13.1 Informações de cadastro </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Quando o Usuário se cadastra na Plataforma, a Likkn coleta as informações fornecidas voluntariamente pelos
        Usuários. Essas informações podem ser pessoais, tais como nome completo, e-mail para login e senha, conforme
        disposto no item 1 acima, bem como poderá coletar mensagens trocadas com a Plataforma Likkn via correio ou
        e-mail, comentários e quaisquer outras informações disponibilizadas nas Comunidades da Plataforma.<br /><br />
        A Likkn se compromete a utilizar as informações disponibilizadas somente mediante a anuência dos Usuários,
        que decorrerá da declaração de concordância com estes Termos e Condições de Uso e Política de Privacidade.<br /><br />
        O Usuário é responsável pela veracidade de todas as Informações fornecidas à Likkn, e por todos os atos que
        sejam realizados com o uso de suas credenciais de acesso, incluindo login, senhas e códigos de segurança, isentando
        a Likkn de quaisquer prejuízos decorrentes da utilização indevida por terceiros. A Likkn se reserva ao direito de
        remover da Plataforma qualquer Usuário que não observe os Termos de Uso e a Política de Privacidade ou que
        tenha, durante a fase de cadastro ou de uso da Plataforma, adulterado, falsificado ou omitido dados ou informações
        indispensáveis.<br /><br />
        Nos termos do artigo 18 da Lei Geral de Proteção de Dados, a qualquer momento e mediante requisição através
        do e-mail help@likkn.com, o Usuário poderá (i) confirmar a existência de tratamento, (ii) acessar os seus dados
        pessoais, (iii) revisar e atualizar suas informações de cadastro e contato, bem como corrigir os dados incompletos
        e inexatos, (iv) solicitar a anonimização, bloqueio ou eliminação de dados pessoais desnecessários e excessivos para
        a finalidade com a qual consentiu ou tratados em desconformidade com a lei; (v) requisitar a portabilidade dos
        dados a outro fornecedor de serviços ou produtos, ressalvados os segredos comercial e industrial, (vi) solicitar a
        eliminação dos dados pessoais tratados com o seu consentimento, exceto nas hipóteses previstas no artigo 16 da
        referida lei, (vii) revogar o seu consentimento de forma gratuita e simples, (viii) solicitar informação das entidades
        públicas e privadas com as quais a Likkn realiza uso compartilhado de dados.<br /><br />
        O Usuário declara-se ciente que a exclusão das Informações pessoais solicitadas pela Plataforma, e imprescindíveis
        para a prestação de serviços pela Likkn, implicará na inviabilidade da manutenção do seu cadastro e na
        impossibilidade de participar das Comunidades.<br /><br />
        AS INFORMAÇÕES COLETADAS NESTE ITEM 13.1 SERÃO COLETADAS PELA LIKKN MEDIANTE
        CONSENTIMENTO ESPECÍFICO DO USUÁRIO E UTILIZADAS PARA QUE A LIKKN CONSIGA
        IDENTIFICAR CORRETA E DEVIDAMENTE O USUÁRIO, DE FORMA A GARANTIR A
        PREVENÇÃO A FRAUDES E A SEGURANÇA DO USUÁRIO TITULAR DOS DADOS PESSOAIS.<br /><br />
      </Typography>
      <Typography className={classes.item} > 13.2 Cookies, tags de pixel, log files, web beacons e outros </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Likkn poderá utilizar cookies e tags de pixel, que possibilitam a coleta de informações referentes ao seu histórico
        de navegação, facilitam o login do Usuário (mediante armazenamento de nome de usuário e senha), auxiliam na
        interação dos Usuários com os serviços oferecidos pela Plataforma, alinham os interesses gerais dos Usuários, além
        de ajustar a demografia do Usuário para aperfeiçoar a performance da Plataforma Likkn e fornecer uma experiência
        melhor a seus Usuários.<br /><br />
        Os Cookies são pequenos arquivos de dados que são transferidos para o seu computador ou dispositivo móvel. A
        Likkn pode utilizar tanto cookies de sessão como cookies persistentes para compreender melhor de que forma o
        Usuário interage com a Plataforma, bem como para monitorar a utilização agregada pelos Usuários e
        redirecionamento de tráfego web na Plataforma Likkn, assim como para melhorar e personalizar nossos serviços.
        O Usuário pode definir determinadas configurações para bloquear cookies, contudo, isto pode limitar certas
        funcionalidades da Plataforma Likkn.<br /><br />
        Ainda, a Plataforma Likkn poderá manter arquivos de log que registram atividades referentes ao uso de nosso
        Website e seus serviços e produtos, tais como os acessos a outros websites, o tipo e a qualidade de conexão de
        internet, hardware e/ou software e as funcionalidades de determinado serviço que tenha sido utilizada. Esses
        arquivos de log poderão ser utilizados para monitorar o tráfego em nosso Website e solucionar problemas técnicos.<br /><br />
        Inclusive, a Plataforma Likkn informa que também poderá usar web beacons, que são usados para rastrear
        anonimamente os padrões de uso online dos Usuários, tais como quais e-mails são abertos e quais links são clicados
        pelos respectivos destinatários. As informações coletadas poderão identificar sites, serviços, funcionalidades e
        produtos populares, que serão utilizadas para personalizar os produtos e serviços oferecidos pela Plataforma.<br /><br />
        A Plataforma Likkn também permitirá que terceiros apliquem cookies, web beacons e log files ou tecnologias
        semelhantes em nosso Website, ou em e-mails enviados pela Plataforma, para medir as tendências de tráfego e
        outras informações que ajudarão a Plataforma a analisar e melhorar os serviços disponibilizados aos Usuários.<br /><br />
        Além disso, a Plataforma poderá coletar informações sobre os dispositivos com os quais o Usuário acessa os
        Serviços, incluindo o horário, endereço de IP, o tipo de navegador e dispositivo utilizado, a página da web que
        visitou antes de acessar o Website da Likkn e identificadores associados aos seus dispositivos. A Likkn utiliza essas
        informações na administração de seu Website para examinar seu tráfego agregado, investigar abusos com relação
        à Plataforma Likkn ou a seus usuários e/ou garantir o cumprimento da legislação vigente. A Likkn não
        disponibiliza essas informações a terceiros, com exceção das hipóteses previstas em lei, como fornecimento de
        dados mediante decisão judicial.<br /><br />
        AS INFORMAÇÕES COLETADAS NESTE ITEM 13.2 SERÃO UTILIZADAS PARA MELHORAR OS
        SERVIÇOS OFERECIDOS PELA LIKKN, BEM COMO, EVENTUALMENTE, FORNECER E
        OFERECER PUBLICIDADE PERSONALIZADA, MONITORAR A EFICÁCIA DOS SERVIÇOS, POR
        MEIO DE ANÁLISE DO NÚMERO DE VISITANTES, TRÁFEGO, USO E PADRÕES DEMOGRÁFICOS
        E PARA CORRIGIR PROBLEMAS DE TECNOLOGIA.<br /><br />
      </Typography>

      <Typography className={classes.item} > 13.3 Finalidades do Tratamento das Informações Disponibilizadas e Coletadas  </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Para fornecer os Serviços da Plataforma, além de outras funcionalidades, a Likkn armazenará, processará e
        transmitirá os dados dos Usuários, arquivos e as informações neles contidas. Ao concordar com esta Política de
        Privacidade, o Usuário consente expressamente com o tratamento dos seus dados pessoais pela Likkn, os quais
        são indispensáveis para a utilização dos nossos serviços.<br /><br />
        O uso das informações coletadas e armazenadas exige o processamento de dados que poderá ser feito pela própria
        Likkn ou por terceiros contratados. O Usuário expressamente concorda com a transferência desses dados a outros
        agentes de mercado, que serão necessárias, única e exclusivamente, para a prestações dos Serviços disponíveis na
        Plataforma Likkn.<br /><br />
        A Plataforma poderá utilizar as Informações acima listadas para as seguintes finalidades abaixo especificadas:<br /><br />
        (i) Criar a conta e cadastros necessários para permitir a interação dos Usuários com a Plataforma Likkn;<br />
        (ii) Prestar aos Usuários os serviços da Likkn de forma adequada e eficiente;<br />
        (iii) Assegurar a adequada verificação da identidade, qualificação e autenticação dos Usuários;<br />
        (iv) Identificar possíveis fraudes;<br />
        (v) Administrar, testar e aprimorar a Plataforma Likkn;<br />
        (vi) Possibilitar aos Usuários uma experiência compatível com sua necessidade;<br />
        (vii) Tornar a página de acesso da Likkn disponível aos seus usuários e identificar os serviços de seus interesses;<br />
        (viii) Registrar informações de acesso para que o Usuário não tenha que completá-las toda vez que se conectar
        ao Website da Plataforma Likkn;<br />
        (ix) Analisar estatísticas e dados de uso, de forma a de forma a personalizar e melhorar a experiência dos
        Usuários na Plataforma Likkn;<br />
        (x) Permitir que o Usuário se comunique com outros Usuários;<br />
        (xi) Realizar controles regulamentares requeridos pela legislação/regulação aplicáveis;<br />
        (xii) Contatar os Usuários nas ocasiões necessárias;<br />
        (xii) Desenvolver e testar novos produtos e ferramentas que possam ser agregadas aos serviços prestados pela
        Plataforma Likkn;<br />
        (xiii) Monitorar informações relevantes para a Plataforma, tais como o perfil, dados e informações ali incluídos,
        a fim de verificar eventual descumprimento das regras estabelecidas na Plataforma;<br />
        (xiv) Diagnosticar e corrigir eventuais problemas e imperfeições no sistema da Plataforma;<br />
        (xv) Oferecer novos produtos e Serviços aos Usuários; e<br />
        (xvi) Atualizar automaticamente o website e a Plataforma ou qualquer software relacionado ao Serviço.<br /><br />

      </Typography>

      <Typography className={classes.item} > 13.4 Compartilhamento das Informações dos Usuários </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Plataforma não disponibilizará as Informações e os arquivos dos Usuários para terceiros, sem o seu prévio e
        expresso consentimento, excetuando-se os casos previstos abaixo:<br /><br />
        (i) Para Terceiros que auxiliem a Likkn a prover o Website/Plataforma, os quais terão acesso às Informações
        e ao Conteúdo, de forma razoavelmente necessária para o provimento e aperfeiçoamento dos Serviços oferecidos
        aos Usuários;<br />
        (ii) Para Terceiros responsáveis por publicidades ou propagandas veiculadas por meio do
        Website/Plataforma, considerando que tais informações serão úteis para direcionar e/ou orientar publicidade e
        propaganda especialmente ao melhor interesse dos Usuários;<br /><br />
        Para proteger os Usuários, a Likkn poderá remover total ou parcialmente os dados/informações que possam
        identificar os Usuários quando do fornecimento de dados para os parceiros da Plataforma. E ainda, a Plataforma
        Likkn combinará as Informações e Conteúdos dos Usuários, a fim de dificultar e proteger a associação de referidas
        informações a qualquer Usuário em específico, não configurando tal conduta, assunção de responsabilidade pela
        Likkn.<br /><br />
        O acesso às informações coletadas é restrito aos funcionários e pessoas autorizadas para esse fim. Empregados
        e/ou pessoas autorizadas que se utilizarem indevidamente dessas informações, violando a Política de Privacidade,
        estarão sujeitos às penalidades previstas em nosso processo disciplinar, sem exclusão das demais medidas legais
        cabíveis.<br /><br />
      </Typography>
      <Typography className={classes.item} > 13.5 Solicitação legal e prevenção de danos </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A Plataforma também poderá acessar, monitorar ou compartilhar as Informações ou Conteúdo dos Usuários caso:
        (i) sejam solicitados por autoridade judicial; (ii) sejam necessários para detectar, prevenir fraudes ou demais
        atividades ilegais ou em desacordo com a presente Política de Privacidade ou os Termos de Uso; e (iii) estejam
        prejudicando o funcionamento da Plataforma ou de qualquer forma prejudicando a imagem da Likkn.<br /><br />
      </Typography>


      <Typography className={classes.item} > 13.6 Mudança de controle societário  </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Caso a Likkn decida vender ou transferir o controle ou os ativos relacionados à Plataforma a terceiros, as
        Informações dos Usuários, tais como nome, denominação social, endereço de e-mail, conteúdo e outras
        informações inseridas ou disponibilizadas no Website/Plataforma poderão estar entre os itens vendidos ou
        transferidos a terceiros, sem que haja remuneração ou pagamento algum aos Usuários. Não obstante, a Likkn se
        esforçará para que o terceiro adquirente implemente uma Política de Privacidade semelhante à presente. <br /><br />
      </Typography>

      <Typography className={classes.item} > 13.7 Armazenamento de Informações </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        O Conteúdo e Informações fornecidos pelos Usuários, bem como quaisquer outras informações relacionadas aos
        Usuários poderão ser armazenadas em qualquer servidor e em qualquer localidade.<br /><br />
        Os dados fornecidos são registrados em nosso banco de dados ou no banco de dados de terceiros contratados pela
        Likkn, de forma automatizada e armazenados com total segurança, sem intervenção humana e mantido em
        servidores ou meios magnéticos de alta segurança. A Likkn adotará todas as medidas possíveis para manter a
        confidencialidade e a segurança das informações sigilosas, porém não se responsabilizará por eventuais prejuízos
        que sejam decorrentes da divulgação de tais informações por parte de terceiros que utilizem as redes públicas ou a
        internet, subvertendo os sistemas de segurança para acessar as informações de usuários.<br /><br />
        A Likkn se obriga a adotar as melhores medidas possíveis para (i) manter a integridade e a confidencialidade das
        informações que forem fornecidas pelos Usuários e; (ii) utilizar os melhores sistemas e recursos de proteção
        disponibilizados pela tecnologia digital para impedir o acesso e/ou utilização indevida de tais dados por terceiros,
        incluindo, entre outras medidas, firewalls e Secure Socket Layers ("SSL").<br /><br />
        O Usuário é o responsável exclusivo por seu nome de usuário (username) e senha, não devendo fornecê-los a
        ninguém, mantendo-os em segredo, de forma a prevenir eventuais acessos indevidos ao seu perfil, Informações
        e/ou Conteúdo por meio do Website/Plataforma da Likkn.<br /><br />
        Após o cancelamento ou desativação de cadastro do Usuário, a Plataforma poderá manter as Informações e/ou
        Conteúdo dos Usuários pelo prazo previsto na Lei 13.709, de 14 de agosto de 2018 e na Lei 12.965 de 23 de abril
        de 2014, por razões legais ou por prazo superior caso sobrevenha nova regulamentação.<br /><br />
      </Typography>
      <Typography className={classes.item} > 13.8 Marketing </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Ao se registrar em na Plataforma Likkn, o Usuário passará a receber informações sobre novas atualizações,
        produtos e serviços periodicamente, por e-mail, conforme a Comunidade que o Usuário resolva participar. O
        recebimento do material de marketing pode ser desativado a qualquer momento, basta que o Usuário programe
        sua conta para não as receber (opt-out).<br /><br />
      </Typography>

      <Typography className={classes.item} > 13.9 Links Externos </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Os anúncios disponibilizados na Plataforma poderão conter links para acesso a sites externos, cujos conteúdos e
        políticas de privacidade não são de responsabilidade da Plataforma. Por isso, a Likkn recomenda que, ao serem
        redirecionados para sites externos, os Usuários sempre consultem as respectivas políticas de privacidade antes de
        consentirem com a coleta/tratamento de seus dados ou informações.<br /><br />
      </Typography>

      <Typography className={classes.item} > 13.10 Atualizações a esta Política </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        Esta Política de Privacidade poderá ser alterada a qualquer momento. Neste caso, publicaremos a política de
        privacidade atualizada em nossa Plataforma, com a nova data da “Última atualização”. Caso sejam feitas alterações
        relevantes que impliquem em um novo consentimento do Usuário, a Likkn exigirá a aceitação do Usuário de forma
        destaca na Plataforma ou encaminhará a Política de Privacidade atualizada, por e-mail, ao Usuário.<br /><br />
      </Typography>
      <Typography className={classes.item} > 14. Termo de Concordância </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        14.1. NOS TERMOS DO ITEM 13 ACIMA, ESPECIALMENTE OS ITENS 13.1 E 13.2 ACIMA, AO
        ADERIR OS TERMOS DE USO E POLÍTICA DE PRIVACIDADE, O USUÁRIO ESTÁ
        EXPRESSAMENTE AUTORIZANDO A LIKKN A UTILIZAR E COMPARTILHAR COM OUTRAS
        EMPRESAS INTEGRANTES DO GRUPO LIKKN, BEM COMO COM PARCEIROS, FUNCIONARIOS E
        TERCEIROS PRESTADORES DE SERVIÇOS, OS QUAIS PODEM OU NÃO ESTAR LOCALIZADOS
        NO BRASIL, QUALQUER INFORMAÇÃO PRESTADA À LIKKN, DESDE QUE ESSE
        COMPARTILHAMENTO SEJA NECESSÁRIO PARA PRESTAÇÃO DOS SERVIÇOS CONTRATADOS
        PELO USUÁRIO. O USUÁRIO RECONHECE A IMPORTÂNCIA DO COMPARTILHAMENTO DE TAIS
        INFORMAÇÕES, VISANDO EXCLUSIVAMENTE A ADEQUADA PRESTAÇÃO DOS SERVIÇOS
        CONTRATADOS POR MEIO DA PLATAFORMA LIKKN E CONCORDA TAMBÉM QUE, AO ADERIR
        AOS TERMOS DE USO E POLÍTICA DE PRIVACIDADE O CONSENTIMENTO DO USUÁRIO
        REFERE-SE À TOTALIDADE DA DURAÇÃO DE SUA RELAÇÃO COM A LIKKN E PODERÁ SER
        REVOGADO A QUALQUER TEMPOS, NOS TERMOS DO ARTIGO 18 DA LEI GERAL DE
        PROTEÇÃO DE DADOS, CONFORME EXPLICADO NO ITEM 13.1 ACIMA <br /><br />
      </Typography>

      <Typography className={classes.item} > 15. Considerações Finais  </Typography>
      <br />
      <Typography className={classes.text} paragraph={true}>
        A presente versão dos Termos de Uso e Política de Privacidade substitui todas as versões anteriores
        disponibilizadas pela Likkn.<br /><br />
        A Likkn poderá modificar o teor dos presentes Termos de Uso e Política de Privacidade a qualquer momento e
        independentemente de prévia notificação, as quais entrarão em vigor na data da publicação na Plataforma e, ao
        continuar utilizando os Serviços, o Usuário automaticamente concorda e se sujeita aos novos Termos de Uso e
        Política de Privacidade. Caso as alterações sejam relevantes, a Likkn, a seu exclusivo critério, poderá encaminhar a
        minuta dos Termos de Uso e Política de Privacidade atualizada para o Usuário por e-mail.<br /><br />
        A Likkn poderá ceder ou transferir, a qualquer tempo, temporariamente ou definitivamente, os direitos e serviços
        oriundos destes Termos de Uso e Política de Privacidade a terceiro prestador de serviços, discricionariamente e
        independentemente de autorização do Usuário. O Usuário não poderá dispor ou transferir estes Termos de Uso e
        Política de Privacidade, total ou parcialmente, sem prévia aprovação da Likkn.<br /><br />
        Este Termo e suas disposições não importam na criação de qualquer vínculo trabalhista, societário, de parceria ou
        associativo entre a Likkn e o Usuário, sendo excluídas quaisquer presunções de solidariedade entre as partes no
        cumprimento de suas obrigações. Cada uma das Partes deverá arcar com suas obrigações tributárias e trabalhistas
        em conformidade com a legislação vigente à época.<br /><br />
        Caso qualquer disposição destes Termos de Uso e Política de Privacidade seja tida como ilegal, inválida ou
        inexequível total ou parcialmente, por qualquer legislação, essa disposição ou parte dela será considerada como
        não existente para os efeitos destes Termos de Uso e Política de Privacidade, mas a legalidade, validade e
        exequibilidade das demais disposições contidas nestes documentos não serão afetadas.<br /><br />
        O não exercício do direito de qualquer das partes não poderá ser interpretado como renúncia ao mesmo, não
        podendo os precedentes serem invocados como novação tácita.<br /><br />
        Todas as comunicações entre a Likkn e os Usuários serão consideradas efetivadas a partir do envio de e-mails aos
        endereços cadastrados pelos Usuários. Os Usuários deverão manter seu endereço de e-mail sempre atualizado.<br /><br />
        As partes reconhecem que os compromissos e obrigações aqui assumidos por elas comportam execução específica,
        nos termos dos artigos 461, 632 e 638 do Código de Processo Civil, servindo este Contrato como título executivo
        extrajudicial, nos termos do artigo 585, II, do Código de Processo Civil<br /><br />
        Estes Termos de Uso e Política de Privacidade são regidos e interpretados pelas leis da Constituição Federal do
        Brasil. As Partes elegem o Foro Cível da Comarca de São Paulo, Estado de São Paulo, para solucionar quaisquer
        controvérsias que surjam em relação a estes Termos de Uso.<br /><br />
        <b className={classes.bold}>Agradecemos pela leitura dos nossos Termos de Uso. Bem-vindo(a) à Likkn!</b><br /><br />
      </Typography>
    </div>
  );
}

export default Termo;