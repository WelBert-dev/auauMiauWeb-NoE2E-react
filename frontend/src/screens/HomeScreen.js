import React from 'react'

export default function HomeScreen() {
  return (
    <>
    <section class="container--principal">
        <h1 class="titulo--principal">Clínica Dr. Auau Miau</h1>
        <div class="grid--principal">
            <table class="table table-bordered table-striped" id="grid">
              <thead>
                <tr>
                  <th></th>
                  <th class="text-center">
                    Descrição<br />
                    <small>pequeno resumo da cirurgia</small>
                  </th>
                  <th class="text-center">
                    Veterinário<br />
                    <small>Responsável pelo procedimento</small>
                  </th>
                  <th class="text-center">
                    Nome do animal e dono<br />
                    <small>Exemplo: chulika/Bruno Santos</small>
                  </th>
                  <th class="text-center">
                    Status<br />
                    <small>Em Processo/Finalizado/Cancelado/Re-Marcado/Óbito</small>
                  </th>
                  <th class="text-center">
                    ID da Cirurgia<br />
                    <small>Número de identificação</small>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="text-nowrap" scope="row">7:00 às 8:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="row">8:00 às 9:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="row">9:00 às 10:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="row">10:00 às 11:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="row">11:00 às 12:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="row">13:00 às 14:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="row">14:00 às 15:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="row">15:00 às 16:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="text-nowrap" scope="row">16:00 às 17:00</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <nav>
              <ul class="pagination">
                <li class="page-item active" onclick="ativado(this)"><a class="page-link">Segunda-Feira</a></li>
                <li class="page-item" onclick="ativado(this)"><a class="page-link">Terça-Feira</a></li>
                <li class="page-item" onclick="ativado(this)"><a class="page-link">Quarta-Feira</a></li>
                <li class="page-item" onclick="ativado(this)"><a class="page-link">Quinta-Feira</a></li>
                <li class="page-item" onclick="ativado(this)"><a class="page-link">Sexta-Feira</a></li>
                <li class="page-item" onclick="ativado(this)"><a class="page-link">Sabádo</a></li>
              </ul>
            </nav>
        </div>
    </section>
    </>
  )
}
