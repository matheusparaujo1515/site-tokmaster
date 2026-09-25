# TokMaster Instituto de Beleza

Plataforma web para o **TokMaster Instituto de Beleza**, salão de beleza localizado na Asa Norte em Brasília (DF), oferecendo cortes visagistas, mechas, tratamentos capilares, manicuria e atendimento neuroinclusivo.

---

## Localização & Atendimento

* **Endereço**: SHC/N CL Quadra 310 Bloco E Loja 40 - Asa Norte, Brasília - DF, CEP 70756-550
* **Telefone**: (61) 3340-1716
* **WhatsApp**: (61) 99901-2250
* **Horário**: Segunda a Sábado: 09:00 às 18:00

---

## Funcionalidades do Projeto

* **Página Inicial**: Apresentação da instituição, diferenciais, tabela de serviços e depoimentos de clientes.
* **Sistema de Agendamento Online (`/agendamento`)**:
  * **Seleção de Serviços**: Procedimentos disponíveis (*Corte Masculino & Infantil, Corte Feminino, Manicure & Pedicure, Mechas & Tratamentos, Design de Sobrancelhas, Depilação*).
  * **Especialidades dos Profissionais**: Filtragem de profissionais por procedimento:
    * **Ney**: Corte Masculino / Corte Feminino / Corte Infantil
    * **Sula**: Corte Masculino / Corte Infantil
    * **Leide**: Corte Feminino / Tratamentos, Mechas e Coloração / Design de Sobrancelhas
    * **Célia**: Manicure e Pedicure / Depilação / Design de Sobrancelhas
    * **Adriana**: Manicure e Pedicure
    * **Qualquer Profissional Disponível**: Primeira vaga livre.
  * **Reserva de Horários**: Seleção de datas e horários disponíveis com confirmação e integração via WhatsApp.
* **Painel de Administração**: Interface para gestão de horários reservados.
* **Design Responsivo**: Adaptado para telas móbiles, tablets e computadores desktop.

---

## Tecnologias Utilizadas

* **React 18**
* **Vite**
* **Tailwind CSS v4** (`@tailwindcss/postcss`)
* **Lucide React**
* **Canvas Confetti**

---

## Como Executar o Projeto Localmente

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/matheusparaujo1515/site-tokmaster.git
   cd site-tokmaster
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:3000/`

4. **Gerar a versão de produção (Build):**
   ```bash
   npm run build
   ```

---

## Estrutura do Projeto

```
site-tokmaster/
├── public/
│   └── images/            # Imagens institucionais e de procedimentos
├── src/
│   ├── components/        # Componentes reutilizáveis da interface
│   ├── data/              # Dados institucionais, serviços e horários (salonData.js)
│   ├── pages/             # Páginas da aplicação (BookingPage.jsx)
│   ├── App.jsx            # Componente raiz com navegação
│   ├── main.jsx           # Ponto de entrada do React
│   └── index.css          # Estilos globais e tokens do Tailwind v4
├── index.html             # Documento HTML principal
├── package.json           # Configuração de dependências e scripts
└── README.md              # Documentação técnica do projeto
```

---

## Licença
Este projeto foi desenvolvido como aplicação acadêmica para o **TokMaster Instituto de Beleza**. Todos os direitos reservados.
