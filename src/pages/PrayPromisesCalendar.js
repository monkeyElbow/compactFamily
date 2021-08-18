import { Container, Col, Card } from "react-bootstrap";

const PrayPromises = () => {
  document.title = "COMPACT Pray the Promises"

  return (
    <Container className="py-5">
      <h4>Pray the Promises Calendar</h4>

      <p>
        Here are thirty promises to pray every month; plus, a thirty-first for
        those extra-day months. Consider praying one each day! Ask God to
        fulfill these promises in the people and ministries of COMP
        <strong>ACT</strong> as we seek him and endeavor his redeeming cause
        with compassionate action!
      </p>

      <p className="lead">
        <ol>
          <li>God has a plan for your life. (Jeremiah 29:11)</li>
          <li>God promises to listen when we pray. (Jeremiah 29:12)</li>
          <li>God is faithful to keep all his promises. (Hebrews 10:23)</li>
          <li>God loves you. (John 3:16)</li>
          <li>God’s love never ends. (1 Chronicles 16:34)</li>
          <li>
            God promises to save everyone who calls on him. (Romans 10:13)
          </li>
          <li>
            God forgives and heals repentant people of prayer. (2 Chronicles
            7:14; 1 John 1:9)
          </li>
          <li>
            God answers the prayers of his people. (2 Chronicles 7:14; Matthew
            7:7-8)
          </li>
          <li>God heals wounded feelings and hurting hearts. (Psalm 147:3)</li>
          <li>God will never leave you or abandon you. (Hebrews 13:5)</li>
          <li>
            God is your strength and help in trouble. (Psalm 46:1; Isaiah 40:31;
            Hebrews 13:6)
          </li>
          <li>
            God rescues you and walks with you when you are in trouble. (Psalm
            50:15, 138:7)
          </li>
          <li>God promises to be your protector. (Psalm 84:11)</li>
          <li>God gives you his peace. (John 14:27)</li>
          <li>God meets your every need. (Matthew 6:33; Philippians 4:19)</li>
          <li>God promises abundant life. (John 10:10)</li>
          <li>
            God promises that if we will search for him, we will find him.
            (Deuteronomy 4:29)
          </li>
          <li>God directs a better path. (Proverbs 3:6)</li>
          <li>God cares for you. (1 Peter 5:7</li>
          <li>God comforts you. (Psalm 23:4; 2 Corinthians 1:3-4)</li>
          <li>God gives you rest. (Matthew 11:28)</li>
          <li>God enables you. (Philippians 4:13)</li>
          <li>
            God has power to do everything he has promised. (Romans 4:21;
            Ephesians 3:20)
          </li>
          <li>God promises not to lie. (Numbers 23:19; Titus 1:2)</li>
          <li>God restores people. (Psalm 23:3; Jeremiah 30:17)</li>
          <li>God restores places. (2 Chronicles 7:14)</li>
          <li>God restores things. (Jeremiah 30:18; Joel 2:25)</li>
          <li>God restores more than before. (Job 42:10)</li>
          <li>
            God promises that he can do more than all we ask or imagine.
            (Ephesians 3:20)
          </li>
          <li>
            God can and promises to do the impossible. (Matthew 19:26; Matthew
            17:20)
          </li>
          <li>
            God promises no tears, no more pain, no more suffering in heaven.
            (Revelation 21:4)
          </li>
        </ol>

        {/* <p><a href="https://compact.family/download/CompactPrayThePromisesCalendar.pdf" target="_new">Download the Pray the Promises PDF version</a></p> */}
      </p>

      <Col md={4} className="p-2">
              <Card>

              <Card.Img
              src="https://compact.family/images/prayCal.jpg" />
              <Card.Body>
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/CompactPrayThePromisesCalendar.pdf"
                  target="_new"
                  rel="noopener noreferrer"

                >
                  Pray the Promises Calendar PDF
                </a>
              </p>

              </Card.Body>
              </Card>
            </Col>
    </Container>
  );
};

export default PrayPromises;
