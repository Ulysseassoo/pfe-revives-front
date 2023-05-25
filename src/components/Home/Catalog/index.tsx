import { dummyShoes } from "@dummyDatas/Shoes";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import React from "react";

import ShoeLinkBox from "@components/Common/ShoeLinkBox";
import { Grid, useMediaQuery } from "@chakra-ui/react";

interface Props {
	numberOfShoes?: number;
}

const Catalog = ({ numberOfShoes }: Props) => {
	const [isSmallerThan980] = useMediaQuery("(max-width: 980px)");
	const shoesToDisplay = dummyShoes.slice(0, numberOfShoes ?? 8);
	return (
		<Grid
			gap={"2rem"}
			gridTemplateColumns={{
				xl: "repeat(4,minmax(0,1fr))",
				lg: "repeat(3,minmax(0,1fr))",
				md: "repeat(2,minmax(0,1fr))",
				sm: "repeat(1,minmax(0,1fr))",
			}}
			as="section"
			paddingX={isSmallerThan980 ? PADDING_IPAD : PADDING_DESKTOP}
		>
			{shoesToDisplay.map((shoe, index) => (
				<ShoeLinkBox {...shoe} key={`${shoe.name}${index}`} />
			))}
		</Grid>
	);
};

export default Catalog;
