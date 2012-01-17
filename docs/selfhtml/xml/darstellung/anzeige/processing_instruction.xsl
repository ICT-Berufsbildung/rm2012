<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="xml" omit-xml-declaration="no" />

<xsl:template match="/">
<xsl:processing-instruction name="xml-stylesheet">
 <xsl:text>href="processing.css" type="text/css"</xsl:text>
</xsl:processing-instruction>
 <test>
  <xsl:apply-templates />
 </test>
</xsl:template>

<xsl:template match="text">
 <xsl:copy-of select="." />
</xsl:template>

</xsl:stylesheet>