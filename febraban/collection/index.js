const HA = [];

const HL = [];

const P = [];

const Q = [
    {"from":"1",   "to": "3",   "type":"Num",  "defaultValue": "208",   "variable": "",              "description": "01.3Q Controle Banco Código do Banco na Compen" },
    {"from":"4",   "to": "7",   "type":"Num",  "defaultValue": "",      "variable": "",              "description": "02.3Q Lote Lote de Ser" },
    {"from":"8",   "to": "8",   "type":"Num",  "defaultValue": "3",     "variable": "",              "description": "03.3Q Registro Tipo de Registro" },
    {"from":"9",   "to": "13",  "type":"Num",  "defaultValue": "",      "variable": "batchCount",    "description": "04.3Q Serviço Nº do Registro Nº Sequencial do Registro no L" },
    {"from":"14",  "to": "14",  "type":"Alfa", "defaultValue": "Q",     "variable": "",              "description": "05.3Q Segmento Cód. Segmento do Registro Detalhe 14" },
    {"from":"15",  "to": "15",  "type":"Alfa", "defaultValue": "",      "variable": "",              "description": "06.3Q CNAB Uso Exclusivo FEBRABAN/CNAB 15 15" },
    {"from":"16",  "to": "17",  "type":"Num",  "defaultValue": "",      "variable": "movementCode",  "description": "07.3Q Cód. Mov. Código de Movimento Remes" },
    {"from":"18",  "to": "18",  "type":"Num",  "defaultValue": "",      "variable": "payerType",     "description": "08.3Q Dados do Pagador Inscrição Tipo Tipo de Inscriç" },
    {"from":"19",  "to": "33",  "type":"Num",  "defaultValue": "",      "variable": "payerDocument", "description": "09.3Q Número Número de Inscriçã" },
    {"from":"34",  "to": "73",  "type":"Alfa", "defaultValue": "",      "variable": "",              "description": "10.3Q Nome Nom" },
    {"from":"74 ", "to": "113", "type":"Alfa", "defaultValue": "",      "variable": "street",        "description": "11.3Q Endereço Endereço" },
    {"from":"114", "to": "128", "type":"Alfa", "defaultValue": "",      "variable": "neighterHood",  "description": "12.3Q Bairro Bairro " },
    {"from":"129", "to": "133", "type":"Num",  "defaultValue": "",      "variable": "cep",           "description": "13.3Q CEP CE" },
    {"from":"134", "to": "136", "type":"Num",  "defaultValue": "",      "variable": "suffixCEP",     "description": "14.3Q Sufixo do CEP Sufixo do CE" },
    {"from":"137", "to": "151", "type":"Alfa", "defaultValue": "",      "variable": "city",          "description": "15.3Q Cidade Cidade " },
    {"from":"152", "to": "153", "type":"Alfa", "defaultValue": "",      "variable": "uf",            "description": "16.3Q UF Unidade da Federação" },
    {"from":"154", "to": "154", "type":"Num",  "defaultValue": "",      "variable": "",              "description": "17.3Q Sac. /Aval.InscriçãoTipo Tipo de Inscrição" },
    {"from":"155", "to": "169", "type":"Num",  "defaultValue": "",      "variable": "",              "description": "18.3Q Número Número de Inscrição " },
    {"from":"170", "to": "209", "type":"Alfa", "defaultValue": "",      "variable": "",              "description": "19.3Q Nome Nome do Sacador/Avalista " },
    {"from":"210", "to": "212", "type":"Num",  "defaultValue": "",      "variable": "",              "description": "20.3Q Banco Correspondente Cód. Bco. Corresp. na Compensação" },
    {"from":"213", "to": "232", "type":"Alfa", "defaultValue": "",      "variable": "",              "description": "21.3Q Nosso Núm. Bco. Correpondente Nosso Nº no Banco Correspondente 2" },
    {"from":"233", "to": "240", "type":"Alfa", "defaultValue": "",      "variable": "",              "description": "22.3Q CNAB Uso Exclusivo FEBRABAN/CNAB 233 240" }
]

const R = [];

const S = [];

const TL = [];

const TA = [];

module.exports = { HA, HL, P, Q, R, S, TL, TA }