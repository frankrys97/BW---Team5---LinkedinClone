import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Dropdown, DropdownMenu } from "react-bootstrap";

function MyFooter() {
  return (
    <Container className=" d-flex flex-wrap mt-5">
      <Row>
        <Col xs={2}>
          <div>
            <p style={{ fontSize: "0.8rem" }}>Informazioni</p>
            <p style={{ fontSize: "0.8rem" }}>Linee guida della comunity</p>
            <div>
              <Dropdown style={{ marginLeft: "-6%" }}>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <span style={{ fontSize: "0.8rem" }}>Privacy e condizioni</span>
                </Dropdown.Toggle>
                <DropdownMenu>
                  <Dropdown.Item eventKey="1">Informativa sulla privacy</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Contratto di licenza</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Termini e condizioni delle pagine</Dropdown.Item>
                  <Dropdown.Item eventKey="4">informativa sui cookie</Dropdown.Item>
                  <Dropdown.Item eventKey="5">Informativa sul copyrigth</Dropdown.Item>
                </DropdownMenu>
              </Dropdown>
            </div>
            <p>Sales and solutions</p>
            <p style={{ fontSize: "0.8rem" }}>Centro sicurezza</p>
            <p style={{ fontSize: "0.7rem" }} className="text-secondary">
              Linkedin Corporation &copy; 2024
            </p>
          </div>
        </Col>
        <Col xs={2}>
          <div>
            <p style={{ fontSize: "0.7rem" }}>Accessibilità</p>
            <p style={{ fontSize: "0.7rem" }}>Carriera</p>
            <p style={{ fontSize: "0.7rem" }}>Opzioni per gli annunci pubblicitari</p>
            <p style={{ fontSize: "0.7rem" }}>Mobile</p>
          </div>
        </Col>
        <Col xs={2}>
          <div>
            <p style={{ fontSize: "0.7rem" }}>Talent Solutions</p>
            <p style={{ fontSize: "0.7rem" }}>Soluzioni di marketing</p>
            <p style={{ fontSize: "0.7rem" }}>Pubblicità</p>
            <p style={{ fontSize: "0.7rem" }}>Mobile</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="d-flex my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-question-circle-fill mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
            <div className="ms-1">
              <p className="my-0">Domande?</p>
              <p style={{ fontSize: "0.7rem" }} className="my-0">
                Visita il nostro centro di assistenza
              </p>
            </div>
          </div>
          <div className="d-flex my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
            <div className="ms-1">
              <p className="my-0">Gestisci il tuo account e la tua privacy?</p>
              <p style={{ fontSize: "0.7rem" }} className="my-0">
                Vai alle impostazioni
              </p>
            </div>
          </div>
          <div className="d-flex my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-shield-shaded"
              viewBox="0 0 16 16"
            >
              <path d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
            </svg>
            <div className="ms-1">
              <p className="my-0">Trasparenza sui contenuti consigliati</p>
              <p style={{ fontSize: "0.7rem" }} className="my-0">
                Visita il nostro centro di assistenza
              </p>
            </div>
          </div>
        </Col>
        <Col xs={2}>
          <div>
            <p>Seleziona lingua</p>
            {/* <Dropdown className=" w-100 ">
              <Dropdown.Toggle
                className="border "
                style={{ backgroundColor: "white" }}
                variant="ligth"
                id="dropdown-basic"
              >
                Italiano (Italiano)
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  English (Inglese)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Espanol (Spagnolo)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Polski (Polacco) else
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Norsk (Norvegese) else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <select id="globalfooter-select_language" className="w-100">
              <option value="it_IT" lang="it-it">
                Italiano (Italiano)
              </option>
              <option value="ar_AE" lang="ar-ae">
                العربية (Arabo)
              </option>
              <option value="cs_CZ" lang="cs-cz">
                Čeština (Ceco)
              </option>
              <option value="da_DK" lang="da-dk">
                Dansk (Danese)
              </option>
              <option value="de_DE" lang="de-de">
                Deutsch (Tedesco)
              </option>
              <option value="en_US" lang="en-us">
                English (Inglese)
              </option>
              <option value="es_ES" lang="es-es">
                Español (Spagnolo)
              </option>
              <option value="fr_FR" lang="fr-fr">
                Français (Francese)
              </option>
              <option value="hi_IN" lang="hi-in">
                हिंदी (Hindi)
              </option>
              <option value="in_ID" lang="in-id">
                Bahasa Indonesia (Indonesiano)
              </option>

              <option value="ja_JP" lang="ja-jp">
                日本語 (Giapponese)
              </option>
              <option value="ko_KR" lang="ko-kr">
                한국어 (Coreano)
              </option>
              <option value="ms_MY" lang="ms-my">
                Bahasa Malaysia (Malese)
              </option>
              <option value="nl_NL" lang="nl-nl">
                Nederlands (Olandese)
              </option>
              <option value="no_NO" lang="no-no">
                Norsk (Norvegese)
              </option>
              <option value="pl_PL" lang="pl-pl">
                Polski (Polacco)
              </option>
              <option value="pt_BR" lang="pt-br">
                Português (Portoghese)
              </option>
              <option value="ro_RO" lang="ro-ro">
                Română (Rumeno)
              </option>
              <option value="ru_RU" lang="ru-ru">
                Русский (Russo)
              </option>
              <option value="sv_SE" lang="sv-se">
                Svenska (Svedese)
              </option>
              <option value="th_TH" lang="th-th">
                ภาษาไทย (Tailandese)
              </option>
              <option value="tl_PH" lang="tl-ph">
                Tagalog (Tagalog)
              </option>
              <option value="tr_TR" lang="tr-tr">
                Türkçe (Turco)
              </option>
              <option value="uk_UA" lang="uk-ua">
                Українська (Ucraino)
              </option>
              <option value="zh_CN" lang="zh-cn">
                简体中文 (Cinese (Semplificato))
              </option>
              <option value="zh_TW" lang="zh-tw">
                正體中文 (Cinese (Tradizionale))
              </option>
            </select>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
