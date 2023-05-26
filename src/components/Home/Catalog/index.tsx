import { dummyShoes } from "@dummyDatas/Shoes";
import { PADDING_DESKTOP, PADDING_IPAD } from "@theme/theme";
import React from "react";

import ShoeLinkBox from "@components/Common/ShoeLinkBox";
import { Grid, useMediaQuery } from "@chakra-ui/react";
import { useListShoesQuery } from "@store/api/Shoes";

interface Props {
	numberOfShoes?: number;
}

const Catalog = ({ numberOfShoes = 8 }: Props) => {
	const { data } = useListShoesQuery({
		brand: "Jordan",
		take: numberOfShoes.toString(),
		rate: "2",
	});
	const [isSmallerThan980] = useMediaQuery("(max-width: 980px)");
	if (!data) {
		return <></>;
	}

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
			{data.data.map((shoe) => (
				<ShoeLinkBox {...shoe} key={`${shoe.shoe_id}`} />
			))}
		</Grid>
	);
};

export default Catalog;
