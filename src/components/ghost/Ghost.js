import ghostData from '../../ghostData.json';
import { Form, Container, Col, Row } from 'react-bootstrap';
import {useState} from 'react';

function Ghost() {
    const [ghosts, setGhosts] = useState(ghostData)

    const updateGhostList = async () => {
        let evid = document.querySelectorAll('.evidences')
        let evidence = []
        for (let i = 0; i < 3; i++) {
            if (evid[i].value !== "None") {
                evidence.push(evid[i].value)
            }
        }
        setGhosts(ghostData.filter(ghost => {
            let valid = []
            for (let i in evidence) {
                if (ghost.evidence.includes(evidence[i])) {
                    valid.push(true);
                } else {
                    valid.push(false);
                }
            }
            for (let i in valid) {
                if (!valid[i]) {
                    return false;
                }
            }
            return true;
        }))
    }

    return (
        <div className="ghost">
            <div className="currentEvidence">
                <Container>
                    <Row>
                        <Col sm={4}>
                        <h2>Evidence 1:</h2>
                            <Form.Select className="evidences" onChange={updateGhostList}>
                                <option defaultValue value="None">Select One</option>
                                <option value="EMF Level 5">EMF Level 5</option>
                                <option value="Spirit Box">Spirit Box</option>
                                <option value="Fingerprints">Fingerprints</option>
                                <option value="Ghost Orb">Ghost Orb</option>
                                <option value="Ghost Writing">Ghost Writing</option>
                                <option value="Freezing Temperatures">Freezing Temperatures</option>
                                <option value="D.O.T.S">D.O.T.S</option>
                            </Form.Select>
                        </Col>
                        <Col sm={4}>
                            <h2>Evidence 2:</h2>
                            <Form.Select className="evidences" onChange={updateGhostList}>
                                <option defaultValue value="None">Select One</option>
                                <option value="EMF Level 5">EMF Level 5</option>
                                <option value="Spirit Box">Spirit Box</option>
                                <option value="Fingerprints">Fingerprints</option>
                                <option value="Ghost Orb">Ghost Orb</option>
                                <option value="Ghost Writing">Ghost Writing</option>
                                <option value="Freezing Temperatures">Freezing Temperatures</option>
                                <option value="D.O.T.S">D.O.T.S</option>
                            </Form.Select>
                        </Col>
                        <Col sm={4}>
                            <h2>Evidence 3:</h2>
                            <Form.Select className="evidences" onChange={updateGhostList}>
                                <option defaultValue value="None">Select One</option>
                                <option value="EMF Level 5">EMF Level 5</option>
                                <option value="Spirit Box">Spirit Box</option>
                                <option value="Fingerprints">Fingerprints</option>
                                <option value="Ghost Orb">Ghost Orb</option>
                                <option value="Ghost Writing">Ghost Writing</option>
                                <option value="Freezing Temperatures">Freezing Temperatures</option>
                                <option value="D.O.T.S">D.O.T.S</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="possibleGhosts">
                <h1>Possible Ghosts:</h1>
                {ghosts.map(ghost => {
                    return (
                        <div className="ghostDetails">
                            <h2>{ghost.name}</h2>
                            <p className="description">{ghost.description}</p>
                            <p className="strength">Strength: {ghost.strength}</p>
                            <p className="weakness">Weakness: {ghost.weakness}</p>
                            <p className="evidence">Evidence: </p>
                            <ul>{ghost.evidence.map((evidence, i) => <li key={i}>{evidence}</li>)}</ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Ghost;