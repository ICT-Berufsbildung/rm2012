<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="apply_imports2.xsl" />

<xsl:template match="/">
 <html>
 <head>
 </head>
 <body>
 <xsl:apply-imports/>
 </body>
 </html>
</xsl:template>

</xsl:stylesheet>