import { Col, Row, Typography, List, Card, Input } from "antd";
import { SetStateAction, useEffect, useState } from "react";
import { getAllScales, getScaleInfo } from "../../services/ScalesService.ts";
import Keyboard from "../../components/Keyboard/Keyboard.tsx";
import processNotes from "../../services/ProcessNotes.ts";

const { Title } = Typography;
const { Search } = Input;

const ScaleVisualizer = () => {
  const [scales, setScales] = useState([{ name: "" }]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedScale, setSelectedScale] = useState("major");
  const [selectedRoot, setSelectedRoot] = useState("C3");
  const [scaleNotes, setScaleNotes] = useState([""]);
  const [scaleInfos, setScaleInfos] = useState({
    name: "",
    notes: [""],
    intervals: [""],
  });

  useEffect(() => {
    const fetchScales = async () => {
      const fetchedScales = getAllScales();
      const sortedScales = fetchedScales.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      setScales(
        sortedScales.map((scale) => ({
          ...scale,
          name: scale.name.charAt(0).toUpperCase() + scale.name.slice(1),
        })),
      );
    };

    void fetchScales();
  }, []);

  useEffect(() => {
    const scale = getScaleInfo(`${selectedRoot} ${selectedScale}`);
    setScaleInfos(scale);
    const processedNotes = processNotes(scale.notes);
    setScaleNotes(processedNotes);
  }, [selectedRoot, selectedScale]);

  const filteredScales = scales.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Title>Scale Visualizer</Title>
      <Search
        placeholder="Search a Scale"
        onChange={handleSearchChange}
        style={{ width: "50%", marginBottom: "16px" }}
      />
      <Row gutter={16} style={{ height: "calc(100% - 150px)" }}>
        <Col span={12} style={{ height: "100%" }}>
          <Card style={{ height: "100%", overflowY: "auto" }}>
            <List
              style={{ cursor: "pointer" }}
              dataSource={filteredScales}
              renderItem={(item) => (
                <List.Item onClick={() => setSelectedScale(item.name)}>
                  <div>{item.name}</div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Title level={4}>Root note:</Title>
          <span>{selectedRoot}</span>
          <div style={{ display: "block", height: "135px" }}>
            <Keyboard
              highlighted={[selectedRoot]}
              onKeyClick={(note) => {
                setSelectedRoot(note);
              }}
            ></Keyboard>
          </div>
          <Title level={4}>Selected Scale:</Title>
          <span>
            {selectedRoot} {selectedScale}
          </span>
          <div style={{ display: "block", height: "135px" }}>
            <Keyboard octave={2} highlighted={scaleNotes}></Keyboard>
          </div>
          <Title level={4}>Notes:</Title>
          {scaleInfos.notes.map((note) => {
            return <span>{note} </span>;
          })}
          <Title level={4}>Intervals:</Title>
          {scaleInfos.intervals.map((note) => {
            return <span>{note} </span>;
          })}
        </Col>
      </Row>
    </>
  );
};

export default ScaleVisualizer;
