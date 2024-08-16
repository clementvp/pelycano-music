import { Col, Row, Typography, List, Card, Input } from "antd";
import { useEffect, useState } from "react";
import { getAllScales } from "../../services/ScalesService.ts";

const { Title } = Typography;
const { Search } = Input;

const ScaleVisualizer = () => {
  const [scales, setScales] = useState([{ name: "" }]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
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
  }, []);

  const filteredScales = scales.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <Title>Scale visualizer</Title>
      <Search
        placeholder="Search a Scale"
        onSearch={(value) => setSearchValue(value)}
        style={{ width: "50%", marginBottom: "16px" }}
      />
      <Row style={{ height: "calc(100% - 150px)" }}>
        <Col span={12} style={{ height: "100%" }}>
          <Card style={{ height: "100%", overflowY: "auto" }}>
            <List
              style={{ cursor: "pointer" }}
              dataSource={filteredScales}
              renderItem={(item) => <List.Item>{item.name}</List.Item>}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={12}></Col>
      </Row>
    </>
  );
};

export default ScaleVisualizer;
