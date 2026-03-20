export interface Tool {
  id: string
  name: string
  description: string
  url: string
  categoryId: string
}

export interface Category {
  id: string
  name: string
  color: string
  borderColor: string
  textColor: string
  badgeBg: string
  icon: string
}

export const categories: Category[] = [
  {
    id: "sistemas-aduaneiros",
    name: "Sistemas Aduaneiros",
    color: "bg-blue-600",
    borderColor: "border-blue-500",
    textColor: "text-blue-400",
    badgeBg: "bg-blue-500/20",
    icon: "🛃",
  },
  {
    id: "classificacao-fiscal",
    name: "Classificação Fiscal",
    color: "bg-purple-600",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    badgeBg: "bg-purple-500/20",
    icon: "📋",
  },
  {
    id: "cambio",
    name: "Câmbio",
    color: "bg-green-600",
    borderColor: "border-green-500",
    textColor: "text-green-400",
    badgeBg: "bg-green-500/20",
    icon: "💱",
  },
  {
    id: "logistica",
    name: "Logística e Rastreamento",
    color: "bg-orange-600",
    borderColor: "border-orange-500",
    textColor: "text-orange-400",
    badgeBg: "bg-orange-500/20",
    icon: "🚢",
  },
  {
    id: "legislacao",
    name: "Legislação e Órgãos",
    color: "bg-red-600",
    borderColor: "border-red-500",
    textColor: "text-red-400",
    badgeBg: "bg-red-500/20",
    icon: "⚖️",
  },
  {
    id: "licencas",
    name: "Licenças e Certificações",
    color: "bg-yellow-600",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-400",
    badgeBg: "bg-yellow-500/20",
    icon: "📜",
  },
  {
    id: "regimes-especiais",
    name: "Regimes Especiais",
    color: "bg-cyan-600",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/20",
    icon: "🔄",
  },
  {
    id: "estatisticas",
    name: "Estatísticas e Inteligência",
    color: "bg-indigo-600",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-400",
    badgeBg: "bg-indigo-500/20",
    icon: "📊",
  },
]

export const tools: Tool[] = [
  // Sistemas Aduaneiros
  {
    id: "siscomex",
    name: "Siscomex",
    description: "Sistema integrado de comércio exterior da Receita Federal para registro de operações de importação e exportação.",
    url: "https://www.siscomex.gov.br",
    categoryId: "sistemas-aduaneiros",
  },
  {
    id: "portal-unico",
    name: "Portal Único Pucomex",
    description: "Portal único do governo federal para operações de comércio exterior, integrando todos os órgãos intervenientes.",
    url: "https://portalsiscomex.receita.fazenda.gov.br",
    categoryId: "sistemas-aduaneiros",
  },
  {
    id: "mantra",
    name: "Mantra",
    description: "Sistema de manifesto de carga da Receita Federal para controle de cargas em trânsito aduaneiro.",
    url: "https://mantra.receita.fazenda.gov.br",
    categoryId: "sistemas-aduaneiros",
  },
  {
    id: "carga-online",
    name: "Carga Online",
    description: "Consulta de situação de cargas importadas e rastreamento de processos aduaneiros em tempo real.",
    url: "https://www4.receita.fazenda.gov.br/simulador/ConsultarNotaFiscal.jsp",
    categoryId: "sistemas-aduaneiros",
  },
  {
    id: "siscarga",
    name: "Siscarga",
    description: "Sistema de controle de carga e trânsito aduaneiro nos portos e aeroportos brasileiros.",
    url: "https://www.siscarga.gov.br",
    categoryId: "sistemas-aduaneiros",
  },

  // Classificação Fiscal
  {
    id: "tec-ncm",
    name: "TEC / NCM",
    description: "Tabela de Exceções à TEC e Nomenclatura Comum do Mercosul com alíquotas vigentes.",
    url: "https://tec.mdic.gov.br",
    categoryId: "classificacao-fiscal",
  },
  {
    id: "tipi",
    name: "TIPI",
    description: "Tabela de Incidência do IPI com alíquotas para classificação e tributação de produtos industrializados.",
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/classificacao-fiscal-de-mercadorias",
    categoryId: "classificacao-fiscal",
  },
  {
    id: "osis",
    name: "OSIS - Consulta NCM",
    description: "Sistema de orientação e consulta para classificação fiscal de mercadorias por NCM da Receita Federal.",
    url: "https://www.receita.fazenda.gov.br/Aplicacoes/ATSDRJ/OSIS/consultarTabelaNCM.app/consultarTabelaNCM",
    categoryId: "classificacao-fiscal",
  },
  {
    id: "classificador-ncm",
    name: "Classificador NCM",
    description: "Ferramenta de consulta e pesquisa de códigos NCM no portal da Receita Federal do Brasil.",
    url: "https://www.receita.fazenda.gov.br/orientacao/tributaria/classificacoes/codigosncm.htm",
    categoryId: "classificacao-fiscal",
  },

  // Câmbio
  {
    id: "ptax-bcb",
    name: "PTAX - Banco Central",
    description: "Taxa de câmbio oficial PTAX do Banco Central do Brasil, usada como referência em contratos e operações cambiais.",
    url: "https://www.bcb.gov.br/estabilidadefinanceira/cotacoestaxascambio",
    categoryId: "cambio",
  },
  {
    id: "conversor-bcb",
    name: "Conversor de Moedas BCB",
    description: "Conversor oficial de moedas do Banco Central com cotações históricas e em tempo real.",
    url: "https://www.bcb.gov.br/conversao",
    categoryId: "cambio",
  },
  {
    id: "infomoney-cambio",
    name: "Câmbio Infomoney",
    description: "Cotações de câmbio em tempo real com histórico e gráficos comparativos das principais moedas.",
    url: "https://www.infomoney.com.br/mercados/cambio",
    categoryId: "cambio",
  },

  // Logística e Rastreamento
  {
    id: "track-trace",
    name: "Track & Trace",
    description: "Rastreamento universal de containers com suporte a múltiplas armadoras e operadores logísticos.",
    url: "https://www.track-trace.com",
    categoryId: "logistica",
  },
  {
    id: "maersk-tracking",
    name: "Maersk Tracking",
    description: "Rastreamento de containers e cargas da armadora Maersk, uma das maiores do mundo.",
    url: "https://www.maersk.com/tracking",
    categoryId: "logistica",
  },
  {
    id: "msc-tracking",
    name: "MSC Tracking",
    description: "Rastreamento de containers e embarques da Mediterranean Shipping Company (MSC).",
    url: "https://www.msc.com/track-a-shipment",
    categoryId: "logistica",
  },
  {
    id: "cma-cgm-tracking",
    name: "CMA CGM Tracking",
    description: "Rastreamento de cargas e containers da armadora CMA CGM com atualizações em tempo real.",
    url: "https://www.cma-cgm.com/ebusiness/tracking",
    categoryId: "logistica",
  },
  {
    id: "hapag-lloyd-tracking",
    name: "Hapag-Lloyd Tracking",
    description: "Rastreamento de containers da armadora Hapag-Lloyd com histórico completo de movimentações.",
    url: "https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html",
    categoryId: "logistica",
  },

  // Legislação e Órgãos
  {
    id: "receita-federal",
    name: "Receita Federal",
    description: "Portal da Receita Federal do Brasil com legislação aduaneira, normas e orientações tributárias.",
    url: "https://www.gov.br/receitafederal",
    categoryId: "legislacao",
  },
  {
    id: "mdic",
    name: "MDIC",
    description: "Ministério do Desenvolvimento, Indústria, Comércio e Serviços — órgão regulador do comércio exterior.",
    url: "https://www.gov.br/mdic",
    categoryId: "legislacao",
  },
  {
    id: "secex",
    name: "SECEX / CAMEX",
    description: "Secretaria de Comércio Exterior com políticas, regulamentos e normas de importação e exportação.",
    url: "https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior",
    categoryId: "legislacao",
  },
  {
    id: "diario-oficial",
    name: "Diário Oficial da União",
    description: "Publicações oficiais do governo federal com leis, decretos e portarias de comércio exterior.",
    url: "https://www.in.gov.br",
    categoryId: "legislacao",
  },

  // Licenças e Certificações
  {
    id: "li-siscomex",
    name: "Licença de Importação",
    description: "Solicitação e consulta de Licenças de Importação (LI) no sistema Siscomex.",
    url: "https://www.siscomex.gov.br",
    categoryId: "licencas",
  },
  {
    id: "anvisa",
    name: "ANVISA",
    description: "Agência Nacional de Vigilância Sanitária — licenças e registros para produtos sujeitos à vigilância sanitária.",
    url: "https://www.gov.br/anvisa",
    categoryId: "licencas",
  },
  {
    id: "mapa",
    name: "MAPA",
    description: "Ministério da Agricultura — certificações fitossanitárias e zoossanitárias para importação e exportação.",
    url: "https://www.gov.br/agricultura",
    categoryId: "licencas",
  },
  {
    id: "inmetro",
    name: "INMETRO",
    description: "Instituto Nacional de Metrologia — certificações e regulamentos técnicos para produtos importados.",
    url: "https://www.inmetro.gov.br",
    categoryId: "licencas",
  },
  {
    id: "ibama",
    name: "IBAMA",
    description: "Instituto Brasileiro do Meio Ambiente — licenças para importação/exportação de produtos e espécies controladas.",
    url: "https://www.gov.br/ibama",
    categoryId: "licencas",
  },

  // Regimes Especiais
  {
    id: "drawback-web",
    name: "Drawback Web",
    description: "Sistema para concessão e controle do regime aduaneiro especial de Drawback do MDIC.",
    url: "https://drawbackweb.mdic.gov.br",
    categoryId: "regimes-especiais",
  },
  {
    id: "siscoserv",
    name: "Siscoserv",
    description: "Sistema Integrado de Comércio Exterior de Serviços, Intangíveis e Outras Operações.",
    url: "https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/siscoserv",
    categoryId: "regimes-especiais",
  },
  {
    id: "recof",
    name: "RECOF",
    description: "Regime Aduaneiro Especial de Entreposto Industrial — suspensão de tributos para industrialização.",
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/regimes-aduaneiros-especiais/recof-sped",
    categoryId: "regimes-especiais",
  },
  {
    id: "repetro",
    name: "Repetro-Sped",
    description: "Regime aduaneiro especial para bens destinados à exploração e produção de petróleo e gás.",
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/regimes-aduaneiros-especiais/repetro-sped",
    categoryId: "regimes-especiais",
  },

  // Estatísticas e Inteligência
  {
    id: "comex-stat",
    name: "Comex Stat",
    description: "Sistema de estatísticas de comércio exterior do MDIC com dados de importação e exportação brasileira.",
    url: "https://comexstat.mdic.gov.br",
    categoryId: "estatisticas",
  },
  {
    id: "aliceweb",
    name: "AliceWeb",
    description: "Sistema de análise de informações de comércio exterior com dados históricos detalhados por NCM.",
    url: "https://aliceweb.mdic.gov.br",
    categoryId: "estatisticas",
  },
  {
    id: "trademap",
    name: "Trade Map - ITC",
    description: "Estatísticas globais de comércio internacional do International Trade Centre com indicadores de mercado.",
    url: "https://www.trademap.org",
    categoryId: "estatisticas",
  },
  {
    id: "un-comtrade",
    name: "UN Comtrade",
    description: "Base de dados global de comércio exterior das Nações Unidas com dados de mais de 200 países.",
    url: "https://comtrade.un.org",
    categoryId: "estatisticas",
  },
  {
    id: "worldbank-data",
    name: "Banco Mundial - Dados",
    description: "Indicadores econômicos e de comércio exterior de países em desenvolvimento do Banco Mundial.",
    url: "https://data.worldbank.org",
    categoryId: "estatisticas",
  },
]
