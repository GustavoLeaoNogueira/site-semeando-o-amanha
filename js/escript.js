angular.module("site", ["ngRoute", "ngSanitize"]);
angular.module("site").config(function($routeProvider){
    $routeProvider.when("/organizacao", {templateUrl: "view/organizacao.html", controller: "organizacaoCtrl"})
                  .when("/metodos", {templateUrl: "view/metodo.html", controller: "metodoCtrl"})
                  .when("/objetivos", {templateUrl: "view/objetivo.html", controller: "objetivoCtrl"})
                  .when("/contato", {templateUrl: "view/contato.html", controller: "contatoCtrl"})
                  .when("/", {templateUrl: "view/inicio.html", controller: "inicioCtrl"})
                  .otherwise({redirectTo: "/"});
});
angular.module("site").filter("negrito", function(){
    return function(input, query){
        var ex = RegExp('('+query+')', 'igm');
        return input.replace(ex, '<strong>$1</strong>');
    }
});
angular.module("site").controller("inicioCtrl", function($scope, $filter, $timeout){

    $scope.textoOrganizacao = '<h3 class="text-center">'+
                                    'Organização da Escola'+
                              '</h3>'+
                              '<p class="text-justify">'+
                                    'Conforme a Resolução 003/2001, Artigo 16: "A organização dos grupos de crianças levando em consideração  a  proposta  pedagógica e o esforço físico, permitindo-se a seguinte relação criança/adulto e a criança professor".'+
                              '</p>'+
                              '<p class="text-justify">'+
                                    $filter('negrito')('Berçário - de 6 a 2 anos, com até 6 crianças por educador, sendo a relação 18 crianças para ...', 'Berçário - ') +
                              '<a  class="btn btn-link" href="#/organizacao">'+'Continuar lendo'+'</a>'+'</p>';

    $scope.textoMetodo = '<h3 class="text-center">'+
                            'Método de trabalho'+
                         '</h3>'+
                         '<p class="text-justify">'+ 
                            'Acreditando na criança, como uma construção social e histórica, consideramos importante conhecer a criança, seu repertório linguístico, intelectual, expressivo, emocional, sua história, etnia, religião, gênero. Através do conhecimento da criança  do meio social e familiar,  vamos desdobrar as ações e práticas pedagógicas, sabendo que  a criança  constrói seu conhecimento através da linguagem corporal, gestual, oral, plástica e escrita.'+
                         '</p>' + 
                        '<p class="text-justify">' + 
                            'Em nossa escola, o planejamento do trabalho educativo se dá por temas. Cada educador em conjunto com a ...'+
                            '<a  class="btn btn-link" href="#/metodos">'+
                                'Continuar lendo'+
                            '</a>'+
                        '</p>';

    $scope.textoObjetivo = '<h3 class="text-center">'+
                                'Fins e Objetivos da escola'+
                           '</h3>'+ 
                           '<p class="text-justify">'+ 
                                'Para que as crianças desenvolvam capacidades e potencialidades adequadas a cada faixa etária tomando em consideração os conhecimentos prévios da criança  em sua fase de desenvolvimento proporcionando assim o desenvolvimento da  autoimagem positiva,  a percepção  de suas limitações e aprendizado  dinâmico. Segundo a resolução 003/2001 Artigo 29. "A educação infantil, primeira etapa da educação básica, com a finalidade o  desenvolvimento integral da criança até  seis anos de idade, seus aspectos físicos, psicológicos, intelectual e social, complementando a ação da família e da comunidade". '+
                           '</p> '+ 
                           '<p class="text-justify"> '+ 
                                'Visando que a criança possa  atuar  de forma cada vez mais...'+
                                '<a  class="btn btn-link" href="#/objetivos">'+
                                    'Continuar lendo'+
                                '</a>'+
                            '</p>';

    $scope.textoContato = '<h3 class="text-center">'+
                                'Contato'+
                          '</h3>'+
                          '<h4 class="text-center">'+
                                'Localização:'+
                          '</h4>'+
                          '<p class="text-justify">'+    
                                'E.E.I. Semeando o Amanhã, Tv. Cosme e Damião ...'+
                                '<a href="#/contato" class="btn btn-link">'+
                                    'Continuar Lendo'+
                                '</a>'+
                          '</p>';

});
angular.module("site").controller("organizacaoCtrl", function($scope, $filter){
    $scope.textoOrganizacao = '<h3 class="text-center">'+ 
                                    'Organização da Escola' + 
                              '</h3>' + 
                              '<p class="text-justify">' + 
                                    'Conforme a Resolução 003/2001, Artigo 16: "A organização dos grupos de crianças levando em consideração  a  proposta  pedagógica e o esforço físico, permitindo-se a seguinte relação criança/adulto e a criança professor".'+
                              '</p>' + 
                              '<p class="text-justify">' + 
                                    $filter('negrito')('Berçário - de 6 a 2 anos, com até 6 crianças por educador, sendo a relação 18 crianças para 3 educadoras.', 'Berçário - ') +
                              '</p>' +
                              '<p class="text-justify">' + 
                                    $filter('negrito')('Maternal I - Crianças de 2 anos a 3 anos, com até 10 crianças por educadora, com turma de no máximo 20  crianças para 2 educadoras.', 'Maternal I -') +
                              '</p>'+ 
                              '<p class="text-justify">' + 
                                    $filter('negrito')('Maternal II - Crianças de 3 anos a 4 anos, com até 10 crianças por educadora, com turma  de no máximo 20 crianças para 2 educadoras.', 'Maternal II - ') +
                              '</p>'+
                              '<p class="text-justify">' + 
                                    $filter('negrito')('Jardim A - Crianças de 4 anos a 5 anos, turma com no máximo 25 crianças para cada uma educadora.', 'Jardim A - ') +
                             '</p>'+ 
                             '<p class="text-justify">' + 
                                    $filter('negrito')('Jardim B - Crianças de 5 anos a 5 anos e onze meses, turma com no máximo 25 crianças para cada uma educadora.', 'Jardim B - ') + 
                             '</p>';

});
angular.module("site").controller("metodoCtrl", function($scope){
    $scope.textoMetodo = '<h3 class="text-center">'+
                            'Método de trabalho'+
                          '</h3>'+ 
                          '<p class="text-justify">'+ 
                                'Acreditando na criança, como uma construção social e histórica, consideramos importante conhecer a criança, seu repertório linguístico, intelectual, expressivo, emocional, sua história, etnia, religião, gênero. Através do conhecimento da criança  do meio social e familiar,  vamos desdobrar as ações e práticas pedagógicas, sabendo que  a criança  constrói seu conhecimento através da linguagem corporal, gestual, oral, plástica e escrita.' + 
                          '</p>' + 
                         '<p class="text-justify">'+ 
                                'Em nossa escola, o planejamento do trabalho educativo se dá por temas. Cada educador em conjunto com a coordenadora, elenca temas possíveis de serem trabalhados. As educadoras escolhem aqueles temas que são de interesse  das crianças.' + 
                         '</p>' + 
                         '<p class="text-justify">' + 
                                'A partir do tema escolhido, cada educadora monta seu planejamento para serem trabalhados e organizar suas atividades que irão desenvolver com sua turma, a cada semana, sempre considerando o ritmo de cada criança.' +
                         '</p>' +
                         '<p class="text-justify">'+
                                'Este material fica documentado no caderno de planejamento da educadora, assim como um relatório diário sobre as atividades desenvolvidas. A coordenadora revisa semanalmente os cadernos de registro de cada educadora.'+
                         '</p>';

});
angular.module("site").controller("objetivoCtrl", function($scope){
    $scope.textoObjetivo = '<h3 class="text-center">' + 
                                'Fins e Objetivos da escola' + 
                           '</h3>'+ 
                           '<p class="text-justify">'+ 
                                'Para que as crianças desenvolvam capacidades e potencialidades adequadas a cada faixa etária tomando em consideração os conhecimentos prévios da criança  em sua fase de desenvolvimento proporcionando assim o desenvolvimento da  autoimagem positiva,  a percepção  de suas limitações e aprendizado  dinâmico. Segundo a resolução 003/2001 Artigo 29. "A educação infantil, primeira etapa da educação básica, com a finalidade o  desenvolvimento integral da criança até  seis anos de idade, seus aspectos físicos, psicológicos, intelectual e social, complementando a ação da família e da comunidade".' + 
                           '</p>' + 
                           '<p class="text-justify">' +
                                'Visando que a criança possa  atuar  de forma cada vez mais autônoma, e possibilitando a expressão de vivência, emoções, sentimentos, desenvolver na criança a capacidade de conhecer explorar o coletivo a experiência cooperativa, conquista e ganhos, que se realizam coletivamente sem contudo deixar de reconhecer a esfera da individualidade das crianças, assim como assegurar a participação  e a responsabilidade de toda a equipe. Nunca fugindo  do lúdico com as crianças.' + 
                            '</p>';

});
angular.module("site").controller("contatoCtrl", function($scope){

    $scope.textoContato = '<h3 class="text-center">'+
                                'Contato'+
                          '</h3>'+
                          '<h4 class="text-center">'+
                                'Telefone para contato:'+
                          '</h4>'+
                          '<p class="text-center">'+
                                '(51)33222654                        '+
                          '</p>'+
                          '<h4 class="text-center">'+
                                'Localização:'+
                          '</h4>'+
                          '<p class="text-center">'+    
                                'E.E.I. Semeando o Amanhã, Tv. Tv. Cosme e Damião , 84 - Partenon, Porto Alegre - RS, 90680-247, Brasil'+
                          '</p>';


});