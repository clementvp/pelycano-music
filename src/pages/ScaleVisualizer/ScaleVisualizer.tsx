import { Col, Row, Typography, List, Card, Input } from "antd";
import { SetStateAction, useEffect, useState } from "react";
import { getAllScales } from "../../services/ScalesService.ts";

const { Title } = Typography;
const { Search } = Input;

const ScaleVisualizer = () => {
  const [scales, setScales] = useState([{ name: "" }]);
  const [searchValue, setSearchValue] = useState("");

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
      <Row style={{ height: "calc(100% - 150px)" }}>
        <Col span={12} style={{ height: "100%" }}>
          <Card style={{ height: "100%", overflowY: "auto" }}>
            <List
              style={{ cursor: "pointer" }}
              dataSource={filteredScales}
              renderItem={(item) => (
                <List.Item>
                  <div>{item.name}</div>
                </List.Item>
              )}
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
