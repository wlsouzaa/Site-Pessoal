<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);
    $area = addslashes($_POST['area']);

    $para = "lopesdesouzawalter23@gmail.com";
    $assunto = "contato";

    $corpo = "Nome: ".$nome. "\n"."Email: ".$email."\n"."Celular: ".$celular."\n".$area;

    $cabeca = "From: wl-cartuchos@hotmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para, $assunto, $corpo, $cabeca)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>